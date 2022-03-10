import { NextPage } from 'next';
import Introduce from '@components/home/introduce';
import Project from '@components/home/project';
import Head from 'next/head';

const Home: NextPage = () => {
  
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
