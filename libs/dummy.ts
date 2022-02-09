export interface icon {
  text: 'Front' | 'Ux/Ui' | 'Design' | 'Back';
}

export interface post extends icon {
  id: number;
  title: string;
  content: string;
  toggle: boolean;
}

export const dummy: post[] = [
  {
    id: 1,
    text: 'Front',
    title: '토스ㅣSLASH 21 - JavaScript Bundle Diet',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
  },
  {
    id: 2,
    text: 'Ux/Ui',
    title: '토스ㅣSLASH 21 - 실무에서 바로 쓰는 Frontend Clean Code',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
  },
  {
    id: 3,
    text: 'Design',
    title: '토스ㅣSLASH 21 - Micro-frontend React, 점진적으로 도입하기',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
  },
  {
    id: 4,
    text: 'Back',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
  },
  {
    id: 5,
    text: 'Design',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
  },
  {
    id: 6,
    text: 'Ux/Ui',
    title: '토스ㅣSLASH 21 - 토스팀을 위한 슬랙봇 설계',
    content:
      '흐름 파악이 어렵고, 도메인 맥락 표현이 안되어 동료에게 물어봐야 알 수 있는 코드',
    toggle: false,
  },
];