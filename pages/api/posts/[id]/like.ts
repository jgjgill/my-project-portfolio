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

  const alreadyExists = await client.like.findFirst({
    where: {
      likeUserId: user?.id,
      likePostId: +id,
    },
  });

  if (alreadyExists) {
    await client.like.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.like.create({
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
      },
    });
  }

  console.log(alreadyExists);

  return res.json({
    ok: true,
  });
};

export default withApiSession(withHandler({ methods: ['POST'], handler }));
