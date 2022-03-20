import Input from '@components/input';
import Comment from '@components/study/comment';
import PostBoard from '@components/study/postBoard';
import { useForm } from 'react-hook-form';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import {
  createNotion,
  fetchNotionPage,
  getBlockData,
} from '@libs/client/notion';
import {
  GetPageResponse,
  ListBlockChildrenResponse,
} from '@notionhq/client/build/src/api-endpoints';
import client from '@libs/server/client';
import useSWR from 'swr';
import useMutation from '@libs/client/useMutation';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { Comment as CommentType, User } from '@prisma/client';
import Button from '@components/button';

export const getStaticPaths: GetStaticPaths = async () => {
  const postsInfo = await client.post.findMany();

  const paths: any = [];
  postsInfo.map((post) => {
    return paths.push({
      params: {
        id: post.id.toString(),
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params: { id },
}: any) => {
  const notion = createNotion();
  const postContent = await client.post.findUnique({
    where: { id: parseInt(id) },
  });
  const postComments = await client.comment.findMany({
    where: { postId: parseInt(id) },
  });

  const stringPostComments = JSON.stringify(postComments);

  const studyPage: GetPageResponse | any = await notion.pages.retrieve({
    page_id: postContent?.pageId!,
  });

  const blocks: ListBlockChildrenResponse = await fetchNotionPage(
    notion,
    postContent?.pageId!
  );

  const studyPageTitle = studyPage.properties.title.title
    .map((title: any) => title.plain_text)
    .join('');
  const studyPageContent = getBlockData(blocks);

  return {
    props: {
      post: {
        title: studyPageTitle,
        content: studyPageContent,
        comment: stringPostComments,
        // blocks
      },
    },
  };
};

interface CommentForm {
  comment: string;
}

export interface PostResponse {
  ok: boolean;
  isLiked: boolean;
  comments: CommentType[];
}

interface CommentResponse {
  ok: boolean;
  comment: CommentType;
}

export interface UserResponse {
  ok: boolean;
  profile: User;
  error?: string;
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { data: user } = useSWR<UserResponse>('/api/users/me');

  const {
    register,
    reset,
    handleSubmit: commentSubmit,
    formState: { errors },
  } = useForm<CommentForm>();
  const { data, mutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );
  const [comment, { loading: commentLoading, data: commentData, error }] =
    useMutation<CommentResponse>(`/api/posts/${router.query.id}/comment`);

  const commentVaild = (data: CommentForm) => {
    if (commentLoading) return;

    if (user?.ok) {
      comment(data);
      reset();
    } else {
      alert(user?.error);
    }
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current && commentData?.ok) {
      mutate();
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [commentData, mutate]);

  return (
    <>
      {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}

      <PostBoard title={post.title} content={post.content} />
      <div className="px-2 py-2 bg-slate-400 space-y-2 rounded-md shadow-md">
        <form
          className="flex flex-col space-y-2"
          onSubmit={commentSubmit(commentVaild)}
        >
          <Input
            label="Comment"
            name="comment"
            type="text"
            placeholder="댓글을 입력해주세요"
            register={register('comment', {
              required: true,
            })}
            required
          />
          <Button text="Submit" loading={commentLoading} />
        </form>
        {data?.comments.length !== 0 && (
          <div className="space-y-2 px-2 py-2 bg-slate-300 rounded-md shadow-md divide-y-2 divide-gray-400">
            {data?.comments?.map((comment) => (
              <Comment
                id={comment.id}
                key={comment.id}
                name={comment.userName}
                content={comment.content}
              />
            ))}
          </div>
        )}
      </div>
      <div ref={scrollRef} className="pt-20" />
    </>
  );
};

export default Post;
