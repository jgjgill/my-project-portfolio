import client from '@libs/server/client'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@libs/server/withSession'

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
    include: {
      likes: {
        select: {
          post: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
      comments: {
        where: { userId: req.session.user?.id },
        select: {
          id: true,
          content: true,
          post: {
            select: {
              id: true,
              title: true,
            },
          },
        },
      },
    },
  })

  return res.status(200).json({ ok: true, profile })
}

export default withApiSession(withHandler({ methods: ['GET'], handler, isPrivate: true }))
