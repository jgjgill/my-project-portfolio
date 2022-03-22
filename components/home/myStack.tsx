import Image from 'next/image';
import react from '../../public/react.svg';
import nextjs from '../../public/nextjs.svg';
import tailwindcss from '../../public/tailwindcss.svg';
import typescript from '../../public/typescript.svg';
import mui from '../../public/mui.svg';
import prisma from '../../public/prisma.svg';
interface MyStackProps {}

const MyStack = ({}: MyStackProps) => {
  return (
    <div className="bg-slate-200 px-2 py-2 space-y-4 rounded-md shadow-md">
      <p className="text-4xl text-center font-semibold text-gray-700">
        My Stack
      </p>
      <div className="grid grid-cols-3 place-items-center gap-10 text-center border-2 border-gray-400 p-4 rounded-md shadow-md">
        <Image src={react} width={70} height={70} layout="fixed" alt="react" />
        <Image
          src={typescript}
          width={70}
          height={70}
          layout="fixed"
          alt="typescript"
        />
        <Image
          src={nextjs}
          width={70}
          height={70}
          layout="fixed"
          alt="nextjs"
        />
        <Image
          src={tailwindcss}
          width={70}
          height={70}
          layout="fixed"
          alt="tailwindcss"
        />
        <Image src={mui} width={70} height={70} layout="fixed" alt="mui" />
        <Image
          src={prisma}
          width={70}
          height={70}
          layout="fixed"
          alt="prisma"
        />
      </div>
    </div>
  );
};

export default MyStack;
