import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/Users";
import { getSession } from "next-auth/react";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        const user = await User.find({ email: session.user.email })
        res.status(200).json({ success: true, data: { user } })
      } catch (error) {
        res.status(400).json({ success: false, error })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}