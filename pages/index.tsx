import { NextPage } from 'next';
import Introduce from '@components/home/introduce';
import Project from '@components/home/project';
import useUser from '@libs/client/useUser';
import Head from 'next/head';

const Home: NextPage = () => {
  const { user, isLoading } = useUser();
  
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
