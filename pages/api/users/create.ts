import client from '@libs/server/client';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  console.log(email);

  const user =
    (await client.user.findUnique({ where: { email } })) ||
    (await client.user.create({ data: { name: 'anoy', email } }));

  console.log(user);
  return res.status(200).end();
};

export default handler;
