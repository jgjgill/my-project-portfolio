import client from '@libs/server/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const {
    query: { id },
  } = req;

  const comments = await client.comment.count({
    where: {
      postId: +id,
    },
  });

  const likes = await client.like.count({
    where: {
      likePostId: +id,
    },
  });

  return res.json({
    ok: true,
    comments,
    likes,
  });
};

export default withApiSession(withHandler({ methods: ['GET'], handler }));
