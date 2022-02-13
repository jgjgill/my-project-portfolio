import { NextApiRequest, NextApiResponse } from "next"
import client from "../../libs/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await client.post.findMany()
  console.log(posts)
}

export default handler