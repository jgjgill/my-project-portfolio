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
  console.log(id);

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
  console.log(isLiked);

  // 갖고와야할 데이터 - 좋아요, 댓글  + 유저?
  return res.json({
    ok: true,
    isLiked,
  });
};

export default withApiSession(
  withHandler({ methods: ['GET', 'POST'], handler })
);
