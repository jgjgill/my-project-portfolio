import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Input from '@components/input';
import Comment from '@components/study/comment';
import PostBoard from '@components/study/postBoard';
import client from '@libs/server/client';
import { comment, post } from '@libs/client/dummy';
import { useForm } from 'react-hook-form';

interface Iparams extends ParsedUrlQuery {
  id: string;
}

interface props {
  post: post;
  comments: comment[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await client.post.findMany();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<props> = async ({ params }) => {
  const { id } = params as Iparams;

  const postData = await client.post.findMany();
  const posts: post[] = JSON.parse(JSON.stringify(postData));

  const commentsData = await client.comment.findMany();
  const filteredComments = commentsData.filter(
    (item) => item.postId.toString() === id
  );
  const comments = JSON.parse(JSON.stringify(filteredComments));

  const post = posts.filter((data) => data.id.toString() === id)[0];

  return {
    props: {
      post,
      comments,
    },
  };
};

interface CommentForm {
  comment: string;
}

const Post = ({
  post,
  comments,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const {
    register,
    handleSubmit: commentSubmit,
    formState: { errors },
  } = useForm<CommentForm>();

  const commentVaild = (data: CommentForm) => {
    console.log(data);
  };

  return (
    <>
      <PostBoard id={post.id} title={post.title} content={post.content} />

      <div className="px-2 py-2 bg-slate-400 space-y-2 rounded-md shadow-md">
        <form className="flex flex-col space-y-2">
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
          <button type="submit" className="border rounded-md shadow-md">
            Submit
          </button>
        </form>
        <div className="space-y-2 px-2 py-2 bg-slate-300 rounded-md shadow-md divide-y-2 divide-gray-400">
          {comments.map((item) => (
            <Comment
              id={item.id}
              key={item.id}
              name={item.user}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Post;
