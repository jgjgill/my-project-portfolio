export type icon = 'Front' | 'Back' | 'Ux/Ui' | 'Design'

export interface post {
  id: number;
  text: icon;
  title: string;
  content: string;
  toggle: boolean;
  comments: comment[];
  commentCount: number;
  likeCount: number;
  createAt?: string;
  upadatedAt?: string;
}

export interface comment {
  id: number;
  postId: number;
  name: string;
  content: string;
}

export const dummyPost: post[] = [
  {
    id: 1,
    text: 'Front',
    title: '토스ㅣSLASH 21 - JavaScript Bundle Diet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis quo quam fuga, repellat libero doloribus aliquid. Veritatis distinctio dignissimos beatae perferendis, fugit exercitationem doloremque tempore doloribus libero deserunt ducimus.',
    toggle: false,
    commentCount: 2,
    likeCount: 1,
    comments: [
      {
        id: 1,
        postId: 1,
        name: 'user',
        content: 'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?'
      },
      {
        id: 2,
        postId: 1,
        name: 'user2',
        content: 'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?'
      },

    ]
  },
  {
    id: 2,
    text: 'Ux/Ui',
    title: '토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    commentCount: 3,
    likeCount: 2,
    comments: [
      {
        id: 3,
        postId: 2,
        name: 'user3',
        content: 'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?'
      },
      {
        id: 4,
        postId: 2,
        name: 'user4',
        content: 'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?'
      },
    ]
  },
  {
    id: 3,
    text: 'Design',
    title: '토스ㅣSLASH 21 - Micro-frontend React, 점진적으로 도입하기',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    commentCount: 5,
    likeCount: 7,
    comments: []
  },
  {
    id: 4,
    text: 'Back',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    commentCount: 3,
    likeCount: 2,
    comments: []
  },
  {
    id: 5,
    text: 'Design',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content: '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    commentCount: 1,
    likeCount: 2,
    comments: []
  },
  {
    id: 6,
    text: 'Ux/Ui',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    commentCount: 3,
    likeCount: 4,
    comments: []
  },
];