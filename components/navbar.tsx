import Link from 'next/link';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex justify-between bg-slate-200 px-4 py-2 rounded-md shadow-md">
      <Link href="/">
        <a className='px-2 text-xl font-semibold text-gray-500'>JG</a>
      </Link>
      <ul className="flex items-center space-x-4 justify-between text-xl font-semibold text-gray-500">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/study">
            <a>Study</a>
          </Link>
        </li>
        <li>
          <Link href="/nav3">
            <a>nav3</a>
          </Link>
        </li>
        <li>
          <Link href="/nav4">
            <a>nav4</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
