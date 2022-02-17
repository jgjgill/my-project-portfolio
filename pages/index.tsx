import { NextPage } from 'next';
import Introduce from '@components/home/introduce';
import Project from '@components/home/project';

const Home: NextPage = () => {
  return (
    <>
      <Introduce />
      <Project />
    </>
  );
};

export default Home;
