import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  const token = await client.token.create({
    data: {
      payload: '333333',
      user: {
        connectOrCreate: {
          where: { email },
          create: { name: 'Anonymouse', email },
        },
      },
    },
  });
  console.log(token);

  return res.status(200).end();
};

export default withHandler('POST', handler);
