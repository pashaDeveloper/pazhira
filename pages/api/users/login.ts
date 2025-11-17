import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import bcrypt from "bcryptjs";
import { client } from "../../../lib/client";
import { signToken } from "../../../utilities/auth";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  // Check if it's a phone number login
  if (req.body.phoneNumber) {
    // In a real app, you would verify the code with your database
    // For now, we'll simulate this
    console.log(`Verifying code ${req.body.verificationCode} for phone ${req.body.phoneNumber}`);
    
    // For demo purposes, accept any 4-digit code
    if (req.body.verificationCode && req.body.verificationCode.length === 4 && /^\d+$/.test(req.body.verificationCode)) {
      // Mock user data
      const user = {
        _id: "mock-user-id",
        name: "User",
        email: `${req.body.phoneNumber}@example.com`,
        phoneNumber: req.body.phoneNumber,
        isAdmin: false,
      };
      
      const token = signToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
      
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        isAdmin: user.isAdmin,
        token,
      });
    } else {
      res.status(401).send({ message: "Invalid_verification_code" });
    }
  } else {
    // Email/password login (existing functionality)
    const user = await client.fetch(`*[_type == "user" && email == $email][0]`, {
      email: req.body.email,
    });
    
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = signToken({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
      
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token,
      });
    } else {
      res.status(401).send({ message: "Invalid_email_or_password" });
    }
  }
});

export default handler;