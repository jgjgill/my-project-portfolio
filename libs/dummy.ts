export interface icon {
  text: 'Front' | 'Ux/Ui' | 'Design' | 'Back';
}

export interface post extends icon {
  id: number;
  title: string;
  content: string;
  toggle: boolean;
  comment: number;
  like: number;
}

export const dummy: post[] = [
  {
    id: 1,
    text: 'Front',
    title: '토스ㅣSLASH 21 - JavaScript Bundle Diet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum omnis quo quam fuga, repellat libero doloribus aliquid. Veritatis distinctio dignissimos beatae perferendis, fugit exercitationem doloremque tempore doloribus libero deserunt ducimus.',
    toggle: false,
    comment: 2,
    like: 1,
  },
  {
    id: 2,
    text: 'Ux/Ui',
    title: '토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    comment: 3,
    like: 2,
  },
  {
    id: 3,
    text: 'Design',
    title: '토스ㅣSLASH 21 - Micro-frontend React, 점진적으로 도입하기',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    comment: 5,
    like: 7,
  },
  {
    id: 4,
    text: 'Back',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    comment: 3,
    like: 2,
  },
  {
    id: 5,
    text: 'Design',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content: '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    comment: 1,
    like: 2,
  },
  {
    id: 6,
    text: 'Ux/Ui',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
    comment: 3,
    like: 4,
  },
];
