export type icon = 'FrontEnd' | 'BackEnd' | 'UX/UI' | 'Design';

export interface post {
  id: number;
  text: icon;
  title: string;
  content: string;
  toggle: boolean;
  comments: comment[];
  commentCount: number;
  likeCount: number;
}

export interface comment {
  id: number;
  user: string;
  userId: number;
  postId: number;
  content: string;
}

// export const dummyPost: post[] = [
//   {
//     id: 1,
//     text: 'Front',
//     title: '토스ㅣSLASH 21 - JavaScript Bundle Diet',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis quo quam fuga, repellat libero doloribus aliquid. Veritatis distinctio dignissimos beatae perferendis, fugit exercitationem doloremque tempore doloribus libero deserunt ducimus.',
//     toggle: false,
//     commentCount: 2,
//     likeCount: 1,
//     comments: [
//       {
//         id: 1,
//         postId: 1,
//         user: 'user2',
//         userId: 2,
//         content:
//           'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?',
//       },
//       {
//         id: 2,
//         postId: 1,
//         user: 'user3',
//         userId: 3,
//         content:
//           'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?',
//       },
//     ],
//   },
//   {
//     id: 2,
//     text: 'Ux/Ui',
//     title: '토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code',
//     content:
//       '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
//     toggle: false,
//     commentCount: 3,
//     likeCount: 2,
//     comments: [
//       {
//         id: 3,
//         postId: 2,
//         user: 'user4',
//         userId: 4,
//         content:
//           'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?',
//       },
//       {
//         id: 4,
//         postId: 2,
//         user: 'user5',
//         userId: 5,
//         content:
//           'Lorem ipsum dolor sit amea assumenda consequuntur veniam incidunt asperiores, sapiente ducimus id?',
//       },
//     ],
//   },
//   {
//     id: 3,
//     text: 'Design',
//     title: '토스ㅣSLASH 21 - Micro-frontend React, 점진적으로 도입하기',
//     content:
//       '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
//     toggle: false,
//     commentCount: 5,
//     likeCount: 7,
//     comments: [],
//   },
//   {
//     id: 4,
//     text: 'Back',
//     title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
//     content:
//       '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
//     toggle: false,
//     commentCount: 3,
//     likeCount: 2,
//     comments: [],
//   },
//   {
//     id: 5,
//     text: 'Design',
//     title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
//     content:
//       '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
//     toggle: false,
//     commentCount: 1,
//     likeCount: 2,
//     comments: [],
//   },
//   {
//     id: 6,
//     text: 'Ux/Ui',
//     title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
//     content:
//       '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
//     toggle: false,
//     commentCount: 3,
//     likeCount: 4,
//     comments: [],
//   },
// ];
