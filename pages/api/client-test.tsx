import { NextApiRequest, NextApiResponse } from "next"
import client from "@libs/server/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await client.comment.findMany()
  console.log(posts)
}

export default handler