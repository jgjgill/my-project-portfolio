import client from '@libs/server/client';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const data = req.body;
  
  
  
  console.log(req.body.data);
  res.status(200).json({ ok: 'good' });
};

export default handler;
