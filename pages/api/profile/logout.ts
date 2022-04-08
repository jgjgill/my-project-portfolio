import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiSession } from '@libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  req.session.destroy();

  return res.status(200).json({ ok: true });
};

export default withApiSession(
  withHandler({ methods: ['POST'], handler, isPrivate: true })
);
