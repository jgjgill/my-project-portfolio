import { NextPage } from 'next';
import Introduce from '@components/home/introduce';
import Project from '@components/home/project';
import Head from 'next/head';
import useSWR from 'swr';
import { UserResponse } from './study/[id]';

const Home: NextPage = () => {
  const { data: user } = useSWR<UserResponse>('/api/users/me');

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Introduce />
      <Project />
    </>
  );
};

export default Home;
