import client from '@libs/server/client'
import withHandler, { ResponseType } from '@libs/server/withHandler'
import { NextApiRequest, NextApiResponse } from 'next'
import { withApiSession } from '@libs/server/withSession'

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseType>) => {
  const { token } = req.body

  const existToken = await client.token.findUnique({
    where: { payload: token },
  })

  if (!existToken) return res.status(404).json({ ok: false, error: '토큰 번호를 잘못 입력했습니다!' })

  req.session.user = {
    id: existToken.userId,
  }
  await req.session.save()
  await client.token.deleteMany({
    where: {
      userId: existToken.userId,
    },
  })

  return res.status(200).json({ ok: true })
}

export default withApiSession(withHandler({ methods: ['POST'], handler, isPrivate: false }))
