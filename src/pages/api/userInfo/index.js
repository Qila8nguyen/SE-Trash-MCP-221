import dbConnect from "../../../utils/dbConnect";
import User from "../../../models/Users";
import { getSession } from "next-auth/react";

export default async function handler(req, res) {
  const session = await getSession({ req });
  const { method } = req
  await dbConnect()
  switch (method) {
    case 'GET':
      try {
        console.log('rererere', session)
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