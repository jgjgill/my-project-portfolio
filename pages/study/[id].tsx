import Input from '@components/input';
import Comment from '@components/study/comment';
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
import { cls } from '@libs/client/utils';
import { contentType } from '@libs/client/notionContentType';

export const getStaticPaths: GetStaticPaths = async () => {
  const postsInfo = await client.post.findMany();

  const paths: { params: { id: string } }[] = [];
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

export interface PostContent {
  type: string;
  text: string;
  annotations?: {
    bold: boolean;
    code: string;
    color: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
  };
}

export interface PostBoardProps {
  title: string;
  content: PostContent[];
}

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const { data: user } = useSWR<UserResponse>('/api/users/me');

  const { data: likeData, mutate: likeMutate } = useSWR<PostResponse>(
    router.query.id ? `/api/posts/${router.query.id}` : null
  );

  const [toggleLike, { loading }] = useMutation(
    `/api/posts/${router.query.id}/like`
  );

  const onClickBack = () => {
    router.back();
  };

  const onToggleLike = () => {
    if (loading) return;

    if (user?.ok) {
      toggleLike({});
      likeMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    } else {
      alert(user?.error);
    }
  };

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
      <div className="px-2 py-2 space-y-2 border border-slate-400 rounded-md shadow-md">
        <div className="relative flex">
          <svg
            className="absolute top-0 -left-1 w-8 h-8 cursor-pointer fill-slate-400 stroke-slate-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClickBack}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          <p className="px-8 py-2 w-full text-center text-xl font-semibold text-slate-400 ">
            {post.title}
          </p>
          <button
            className='text-slate-400'
            onClick={onToggleLike}
          >
            {user?.ok && likeData?.isLiked ? (
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="px-4 py-4 min-h-[20rem] overflow-x-hidden whitespace-pre-wrap border border-slate-400 rounded-md shadow-md">
          {post.content.map((item: PostContent, i: number) =>
            contentType(item, i)
          )}
        </div>
      </div>
      <div className="px-2 py-2 border border-slate-400 space-y-2 rounded-md shadow-md">
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
          <div className="space-y-2 px-2 py-2 bg-slate-400 rounded-md shadow-md divide-y-2 divide-slate-400">
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
