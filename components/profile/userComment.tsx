import { User } from '@prisma/client';
import Link from 'next/link';
import useSWR from 'swr';

interface UserCommentProps {}

interface LikeAndCommentWithUser extends User {
  likes: {
    post: {
      id: number;
      title: string;
    };
  }[];
  comments: {
    id: number;
    content: string;
    post: {
      id: number;
      title: string;
    };
  }[];
}

interface UserResponse {
  ok: boolean;
  profile: LikeAndCommentWithUser;
  error?: string;
}

const UserComment = ({}: UserCommentProps) => {
  const { data: user, mutate } = useSWR<UserResponse>('/api/profile/me', {
    suspense: true,
  });

  return (
    <>
      {user?.profile.comments.map((comment) => (
        <Link key={comment.id} href={`study/${comment.post.id}`}>
          <a className="underline text-slate-50 hover:translate-y-1 transition">
            {comment.content}
          </a>
        </Link>
      ))}
    </>
  );
};

export default UserComment;
