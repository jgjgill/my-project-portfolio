import client from '@libs/server/client';
import withHandler from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    session: { user },
    body: { comment },
  } = req;

  const newComment = await client.comment.create({
    data: {
      user: {
        connect: {
          id: user?.id,
        },
      },
      post: {
        connect: {
          id: +id,
        },
      },
      content: comment,
    },
  });

  return res.json({
    ok: true,
    comment: newComment,
  });
};

export default withApiSession(withHandler({ methods: ['POST'], handler }));
