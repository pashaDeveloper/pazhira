import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import bcrypt from "bcryptjs";
import { signToken } from "../../../utilities/auth";
import { createUser, findUserByEmail } from "../../../lib/server/users-db";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const existUser = await findUserByEmail(req.body.email);
  if (existUser) {
    return res.status(401).send({ message: "Email_already_exists" });
  }
  const createdUser = await createUser({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password),
    isAdmin: false,
  });
  const user = {
    _id: createdUser._id,
    name: req.body.name,
    email: req.body.email,
    isAdmin: false,
  };
  const token = signToken(user);
  res.send({ ...user, token });
});

export default handler;
