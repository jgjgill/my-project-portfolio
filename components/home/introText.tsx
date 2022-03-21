interface IntroTextProps {
  title: string;
  text: string;
}

const IntroText = ({ title, text }: IntroTextProps) => {
  return (
    <div className="space-y-2 ">
      <span className="text-lg font-bold text-gray-500">{title}</span>
      <p className="text-md font-semibold text-gray-700">{text}</p>
    </div>
  );
};

export default IntroText;
