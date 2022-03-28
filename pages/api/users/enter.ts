import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';
import mail from '@sendgrid/mail';

mail.setApiKey(process.env.SENDGRID_API_KEY!);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ ok: false });
  }

  const payload = Math.floor(100000 + Math.random() * 900000) + '';

  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: { email },
          create: { name: 'Anonymous', email },
        },
      },
    },
  });

  if (token) {
    await mail.send({
      from: process.env.MY_EMAIL!,
      to: email,
      subject: 'Login Token Mail',
      text: payload,
      html: `<strong>Your token is ${payload}</strong>`,
    });
  }

  console.log(token);

  return res.status(200).json({ ok: true });
};

export default withHandler({ methods: ['POST'], handler, isPrivate: false });
