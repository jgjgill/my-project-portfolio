import withHandler from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
  } = req;
  console.log(id);

  return res.json({
    ok: true,
  });
};

export default withApiSession(withHandler({ methods: ['GET'], handler }));
