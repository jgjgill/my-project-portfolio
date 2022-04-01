import Link from 'next/link';
import Carousel from './carousel';
import ProjectContainer from './projectContainer';
import study1 from '../../public/study1.png';

interface ProjectProps {}

const Project = ({}: ProjectProps) => {
  const MyBlogCarouselImgs = [
    { title: 'Study', src: study1 },
    { title: 'Test', src: study1 },
  ];

  return (
    <div className="bg-slate-200 w-full py-4 px-2 text-center space-y-8 shadow-md rounded-md">
      <ProjectContainer
        title="My Blog"
        date="2022-02-08 ~ ing..."
        git="https://github.com/jgjgill/my_project_portfolio"
      >
        <Carousel imgsInfo={MyBlogCarouselImgs} />
        <div className="space-y-2 text-left px-2">
          <div>
            <h3>소개</h3>
            <p>
              제 자신을 소개할 수 있는 포트폴리오 사이트입니다. 개발 공부에
              대해서 게시판 형식으로 살펴볼 수 있습니다.
            </p>
          </div>
          <div>
            <h3>동기</h3>
            <p>
              Notion API를 활용해서 구현한 블로그입니다. NextJS를 기반으로
              구현했습니다. SSG방식을 활용해서 정적으로 페이지를 렌더링하고자
              했습니다.
            </p>
          </div>
          <div>
            <h3>기능 구현</h3>
            <p>로그인 기능, 포트폴리오, 블로그, 좋아요, 댓글</p>
          </div>
          <div>
            <h3>사용 스택</h3>
            <p>NextJs, Prisma, Tailwind, Vercel</p>
          </div>
          <div>
            <h3>주소</h3>
            <Link href="https://jgjgill.vercel.app/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                jgjgill.vercel.app
              </a>
            </Link>
          </div>
        </div>
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
