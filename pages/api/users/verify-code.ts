import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import { client } from "../../../lib/client";
import { signToken } from "../../../utilities/auth";
import bcrypt from "bcryptjs";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { phoneNumber, verificationCode } = req.body;
  
  // Validate inputs
  if (!phoneNumber || !verificationCode) {
    return res.status(400).send({ message: "Phone number and verification code are required" });
  }
  
  // In a real app, you would:
  // 1. Look up the verification code in the database
  // 2. Check if it matches and hasn't expired
  // 3. If valid, create or log in the user
  console.log(`Verifying code ${verificationCode} for phone ${phoneNumber}`);
  
  // For demo purposes, accept any 4-digit code
  if (verificationCode.length === 4 && /^\d+$/.test(verificationCode)) {
    // Check if user exists, if not create one
    let user = await client.fetch(`*[_type == "user" && phoneNumber == $phoneNumber][0]`, {
      phoneNumber: phoneNumber,
    });
    
    // If user doesn't exist, create a new one
    if (!user) {
      // In a real app, you would create the user in your database
      // For now, we'll just create a mock user object
      user = {
        _id: "mock-user-id-" + Date.now(),
        name: "User",
        email: `${phoneNumber}@example.com`,
        phoneNumber: phoneNumber,
        isAdmin: false,
      };
    }
    
    // Generate token
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
});

export default handler;