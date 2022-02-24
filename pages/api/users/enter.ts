import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const user =
    (await client.user.findUnique({
      where: { email },
      include: { comments: true, likes: true },
    })) || (await client.user.create({ data: { name: 'anoy', email } }));

  console.log(user);
  return res.status(200).end();
};

export default withHandler('POST', handler);
