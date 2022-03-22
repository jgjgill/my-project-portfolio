interface IntroProps {}

const Intro = ({}: IntroProps) => {
  return (
    <div className="px-2 py-2 space-y-4 rounded-md shadow-md">
      <p className="text-lg font-bold text-gray-700 text-center whitespace-pre-wrap">
        {`프론트엔드 개발자를 꿈꾸고 있습니다.\n즐기면서 개발을 배우고 있습니다.\n웹에서의 기능 구현과 UX/UI에 관심이 많습니다.`}
      </p>
      <div className="text-right text-sm font-normal text-slate-500">
        <span>Last Update:</span>
        <span>2022.03.22</span>
      </div>
    </div>
  );
};

export default Intro;
