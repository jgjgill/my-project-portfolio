import Button from '@components/button';
import Input from '@components/input';
import useMutation from '@libs/client/useMutation';
import { User } from '@prisma/client';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import useSWR from 'swr';

interface NicknameForm {
  nickname: string;
}

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

const Profile: NextPage = () => {
  const { data: user, mutate: nicknameMutate } =
    useSWR<UserResponse>('/api/profile/me');

  const router = useRouter();

  const [nicknameChange, { loading: nicknameLoading }] =
    useMutation('/api/profile');

  const {
    register: nicknameRegister,
    handleSubmit: nicknameSubmit,
    formState: { errors: nicknameErrors },
    reset: nicknameReset,
  } = useForm<NicknameForm>();

  const nicknameValid = (nicknameForm: NicknameForm) => {
    nicknameChange(nicknameForm);
    nicknameMutate(
      (prev) =>
        prev && {
          ...prev,
          profile: {
            ...prev.profile,
            name: nicknameForm.nickname,
          },
        },
      false
    );
    nicknameReset();
  };

  useEffect(() => {
    if (!(user && user?.ok)) {
      router.replace('/');
    }
  }, [user, router]);

  return (
    <div className="bg-slate-200 px-2 py-2 space-y-2 rounded-md shadow-md">
      <div className="text-xl font-bold text-slate-700">Profile</div>
      <div>{user?.profile?.name}</div>
      <form
        onSubmit={nicknameSubmit(nicknameValid)}
        className="flex flex-col space-y-2 items-center"
      >
        <Input
          label="Nickname"
          name="nickname"
          type="text"
          placeholder="Nickname Change"
          register={nicknameRegister('nickname', { required: true })}
          required
        />
        <Button text="Enter" loading={false} />
      </form>

      <div className="space-y-2">
        <h3>좋아요 페이지</h3>
        <div className="flex flex-col space-y-2">
          {user?.profile.likes.map((like) => (
            <Link key={like.post.id} href={`study/${like.post.id}`}>
              <a className="underline hover:text-lg">{like.post.title}</a>
            </Link>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <h3>댓글 작성 내역</h3>
        <div className="flex flex-col space-y-2">
          {user?.profile.comments.map((comment) => (
            <Link key={comment.id} href={`study/${comment.post.id}`}>
              <a className="underline hover:text-lg">{comment.content}</a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
