interface IntroItemProps {
  text?: string;
  children?: React.ReactNode;
}

const IntroItem = ({text, children}: IntroItemProps) => {
  return (
    <div className="flex items-center justify-center w-20 h-10 ">
      <span className="text-xl font-bold">{text}</span>
      {children}
    </div>
  )
}

export default IntroItem