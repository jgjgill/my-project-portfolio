import { StaticImageData } from 'next/image'

import study1 from '@public/study1.png'
import home1 from '@public/home1.png'

export interface IProjectInfo {
  title: string
  date: string
  git: string
  ariaLabel: string
}

export interface IProjectCarousel {
  title: string
  src: StaticImageData
  alt: string
}

export interface IProjectDescription {
  title: string
  content: string
  link: boolean
}

export interface IProjectDevelopmentLogContent {
  title: string
  text: string
  link?: string
}

export interface IProjectDevelopmentLogParagraph {
  title: string
  contents: IProjectDevelopmentLogContent[]
}

const MYBLOG_INFO: IProjectInfo = {
  title: 'My Blog',
  date: '2022-02-08',
  git: 'https://github.com/jgjgill/my_project_portfolio',
  ariaLabel: 'github page',
}

const MYBLOG_IMAGES: IProjectCarousel[] = [
  { title: 'Home', src: home1, alt: 'home' },
  { title: 'Study', src: study1, alt: 'study' },
]

const MYBLOG_DESCRIPTIONS: IProjectDescription[] = [
  {
    title: 'Introduce',
    content:
      '저만의 개발 블로그이자 포트폴리오 사이트입니다. 개발 공부하면서 배운 내용들을 기록하고 공유하고자 개발하게 되었습니다.',
    link: false,
  },
  {
    title: 'Motivation',
    content:
      '평소 저는 개발 공부를 할 때 노션에 적으면서 공부합니다. 이것저것 적다보니 사람들과 공유하면 좋을 것 같다는 생각을 하게 되었습니다. 그래서 Notion API와 NextJS를 활용해서 블로그를 제작하게 되었습니다.',
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
]

const MYBLOG_DEVELOPMENT_LOG: IProjectDevelopmentLogParagraph[] = [
  {
    title: '스타일 구성',
    contents: [
      {
        title: 'tailwindCSS',
        text: '반응형으로 쉽게 구현할 수 있었습니다.',
      },
    ],
  },
  {
    title: '기능 구현',
    contents: [
      {
        title: 'Suspense',
        text: '로딩 컴포넌트를 만들어 Suspnese 적용해봤습니다. 직접 구현해보면서 선언적으로 로딩 기능을 처리할 수 있었습니다. 또한, 데이터가 이미 있을거라 가정하면서 코드를 작성할 수 있었습니다.',
        link: 'study/36',
      },
      {
        title: '블로그 기능',
        text: 'NextJS와 NotionAPI를 활용해서 블로그를 구현했습니다. 페이지를 미리 빌드하는 방식으로 Static Site Generation(SSG)을 사용했습니다. NextJS에서 getStaticProps와 getStaticPaths를 통해 데이터를 가져옵니다. 데이터는 저의 노션 페이지에 기반하며 FrontEnd, Clean Code, BackEnd, UX/UI 분야로 구분하고자 했습니다.',
      },
      {
        title: '로그인 기능',
        text: 'iron session을 활용해서 암호화 및 세션을 구현했습니다.',
      },
    ],
  },
  {
    title: '주요 라이브러리',
    contents: [
      {
        title: 'SWR',
        text: 'SWR를 활용해서 데이터를 가져왔습니다. SWR를 사용하면서 캐시와 Mutation에 대해 이해할 수 있었습니다. Key를 통한 캐싱으로 요청을 최소화하는 개념을 알았습니다. Mutation에서도 사용자에게 데이터의 변경을 즉각적으로 보여지도록 하는 장점을 파악하면서 좋아요와 댓글 기능에 활용해봤습니다.',
      },
      {
        title: 'Prisma',
        text: 'Prisma를 사용하면서 편리하게 DB를 생성할 수 있었습니다. 여러 모델을 빠르게 만들 수 있었고 Type 시스템으로 높은 생산성을 얻을 수 있었습니다.',
      },
    ],
  },
  {
    title: '기타',
    contents: [
      {
        title: 'TS 활용',
        text: '처음 써보는 타입스크립트로 아직 능숙하게 사용하지는 못한 것 같습니다. 그럼에도 타입스크립트을 사용하면서 장점을 확실히 느낄 수 있어 만족감이 높았고 타입스크립트의 필요성을 확실히 알게 되었습니다. 자동완성 기능 덕분에 오타나 타입 등으로 인해 발생할 수 있는 에러를 눈에 띄게 줄일 수 있었습니다. 저 혼자만의 개발에서도 편리했던 타입스크립트가 협업에서는 필수적인 도구임을 파악할 수 있었습니다.',
      },
    ],
  },
]

export { MYBLOG_INFO, MYBLOG_DESCRIPTIONS, MYBLOG_IMAGES, MYBLOG_DEVELOPMENT_LOG }
