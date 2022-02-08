import { NextApiRequest, NextApiResponse } from "next"
import client from "../../libs/client"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await client.user.create({
    data: {
      name: 'jg'
    }
  })
  
  await res.json({
    ok: true,
  })
}

export default handler