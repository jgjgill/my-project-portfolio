import client from '@libs/server/client'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { withApiSession } from '@libs/server/withSession'
import { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const posts = await client.post.findMany({
    include: {
      _count: {
        select: {
          comments: true,
          likes: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })

  return res.json({
    ok: true,
    posts,
  })
}

export default withApiSession(withHandler({ methods: ['GET'], handler }))
