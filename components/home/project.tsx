import Carousel from './carousel';
import ProjectContainer from './projectContainer';
import study1 from '../../public/study1.png';
import Content from './content';
import Button from '@components/button';
import { useForm } from 'react-hook-form';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  const MyBlogCarouselImgs = [
    { title: 'Study', src: study1 },
    { title: 'Test', src: study1 },
  ];

  const MyBlogContents = [
    {
      title: 'Introduce',
      content:
        '저만의 개발 블로그이자 포트폴리오 사이트입니다. 개발 공부하면서 배운 내용들을 기록하고 공유하고자 개발하게 되었습니다.',
      link: false,
    },
    {
      title: 'Motivation',
      content:
        '평소 저는 개발 공부를 할 때 노션에 적으면서 공부합니다. 이것저것 적다보니 사람들과 공유하면 좋을 것 같다는 생각을 하게 되었습니다. 그래서 Notion API와 NextJS를 활용해서 제 자신을 소개하는 블로그를 제작하고 싶었습니다.',
      link: false,
    },
    {
      title: 'Function',
      content: '게시판, 좋아요, 댓글, 로그인, 포트폴리오',
      link: false,
    },
    {
      title: 'Stack',
      content: 'NextJS, Prisma, Tailwind, Vercel',
      link: false,
    },
    {
      title: 'Address',
      content: 'jgjgill.vercel.app',
      link: true,
    },
  ];

  const {
    register: developRegister,
    handleSubmit: developSubmit,
    formState: { errors: developErrors },
  } = useForm();

  const developValid = () => {
    console.log('development log');
  };

  return (
    <div className="border border-slate-400 w-full py-4 px-2 text-center space-y-8 shadow-md rounded-md">
      <ProjectContainer
        title="My Blog"
        date="2022-02-08 ~ ing..."
        git="https://github.com/jgjgill/my_project_portfolio"
      >
        <Carousel imgsInfo={MyBlogCarouselImgs} />
        <Content contents={MyBlogContents} />
        <form onSubmit={developSubmit(developValid)}>
          <Button text="Development Log" loading={false} />
        </form>
      </ProjectContainer>
      <ProjectContainer
        title="Calendar-Project"
        date="2022-01-05 ~ 2022-01-30"
        git="https://github.com/JS-TFT/Calendar-Project"
      >
        ing...
      </ProjectContainer>
    </div>
  );
};

export default Project;
