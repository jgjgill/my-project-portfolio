import client from '@libs/server/client';
import { NextApiRequest, NextApiResponse } from 'next';


const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  res.status(200).json({ ok: 'good!' });
};

export default handler;
