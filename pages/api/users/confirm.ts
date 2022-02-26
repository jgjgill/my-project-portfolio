import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiSession } from '@libs/server/withSession';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { token } = req.body;
  console.log(token);

  const existToken = await client.token.findUnique({
    where: { payload: token },
  });

  if (!existToken) return res.status(404).end();

  req.session.user = {
    id: existToken.userId,
  };
  await req.session.save();
  await client.token.deleteMany({
    where: {
      userId: existToken.userId,
    },
  });

  return res.status(200).json({ ok: true });
};

export default withApiSession(
  withHandler({ method: 'POST', handler, isPrivate: false })
);
