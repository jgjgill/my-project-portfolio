import { NextApiRequest, NextApiResponse } from 'next'

import withHandler, { ResponseType } from '@libs/server/withHandler'
import { withApiSession } from '@libs/server/withSession'
import client from '@libs/server/client'

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const {
    session: { user },
    body: { nickname },
  } = req

  const name = await client.user.update({
    where: {
      id: user?.id,
    },
    data: {
      name: nickname,
    },
  })

  return res.status(200).json({
    ok: true,
    nickname: name,
  })
}

export default withApiSession(withHandler({ methods: ['POST'], handler }))
