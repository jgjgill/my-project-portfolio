import Link from 'next/link';

interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex justify-between bg-slate-200 px-4 py-2 rounded-md shadow-md">
      <Link href="/">
        <a className="flex items-center space-x- px-2 text-xl font-semibold text-gray-500">
          <span className='text-gray-400'>JG</span>
        </a>
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
          <Link href="/login">
            <a>Login</a>
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
