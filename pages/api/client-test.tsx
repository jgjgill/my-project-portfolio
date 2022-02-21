import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/server/client';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  



  return res.json({ ok: 'good' });
};

export default handler;
