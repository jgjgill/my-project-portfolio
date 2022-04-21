import Carousel from './carousel';
import ProjectContainer from './projectContainer';
import study1 from '../../public/study1.png';
import Content from './content';
import Button from '@components/button';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

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

  const [showDevelopmentLog, setShowDevelopmentLog] = useState(false);

  const developValid = () => {
    setShowDevelopmentLog((prev) => !prev);
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
        {showDevelopmentLog && (
          <div>
            <div
              onClick={() => {
                setShowDevelopmentLog((prev) => !prev);
              }}
              className="fixed -top-8 left-0 right-0 bottom-0 bg-none"
            />
            <div className="fixed overflow-y-auto top-20 left-10 right-10 bottom-10 p-5 bg-slate-800 rounded-md shadow-md">
              <button
                className="absolute right-0 top-0 p-1 cursor-pointer"
                onClick={() => setShowDevelopmentLog((prev) => !prev)}
              >
                <svg
                  className="w-6 h-6 stroke-slate-50 hover:scale-105 transition"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="text-slate-50">
                <div className="flex">
                  <span className="whitespace-pre">회고, 보완할 점, 배운 점, 특이사항, 이슈, 해결 사항</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint et dolorum eligendi laborum tenetur quia. Eligendi
                    fugiat quia quidem magni recusandae doloremque nobis labore
                    inventore! Quas id placeat corrupti voluptates! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Aliquid maiores
                    neque provident omnis beatae quod tempore sequi, cumque iste
                    vero sapiente excepturi, voluptate minima fugit iusto optio
                    id quibusdam odit. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Nostrum, saepe. Consectetur soluta dicta
                    ratione aliquid ipsa id, maiores animi eligendi praesentium
                    est quae. Enim dicta fuga iste laborum deleniti tempore?
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
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
