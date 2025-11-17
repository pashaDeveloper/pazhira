import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";

const handler = nc();

handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  const { phoneNumber } = req.body;
  
  // Validate phone number
  if (!phoneNumber) {
    return res.status(400).send({ message: "Phone number is required" });
  }
  
  // In a real app, you would integrate with an SMS service here
  // For example, using Twilio, AWS SNS, or another SMS provider
  console.log(`Sending verification code to ${phoneNumber}`);
  
  // For demo purposes, we'll just return success
  // In a real app, you would:
  // 1. Generate a random 4-digit code
  // 2. Store it in the database with an expiration time
  // 3. Send it via SMS
  // 4. Return success
  
  // Simulate sending SMS
  // const verificationCode = Math.floor(1000 + Math.random() * 9000).toString();
  // Store in database with expiration (e.g., 5 minutes)
  // await saveVerificationCode(phoneNumber, verificationCode);
  // await sendSMS(phoneNumber, `Your verification code is: ${verificationCode}`);
  
  res.send({ message: "Verification code sent successfully" });
});

export default handler;