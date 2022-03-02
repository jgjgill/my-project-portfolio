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
    session: { user },
  } = req;

  const isLiked = Boolean(
    await client.like.findFirst({
      where: {
        likeUserId: user?.id,
        likePostId: +id,
      },
      select: {
        id: true,
      },
    })
  );

  const comments = await client.comment.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return res.json({
    ok: true,
    isLiked,
    comments,
  });
};

export default withApiSession(withHandler({ methods: ['GET'], handler }));
