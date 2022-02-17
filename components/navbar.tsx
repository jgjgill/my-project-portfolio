import Link from 'next/link';

interface NavbarProps {}

const nav = [
  { name: 'Home', href: '/' },
  { name: 'Study', href: '/study' },
  { name: 'Login', href: '/login' },
];

const Navbar = ({}: NavbarProps) => {
  return (
    <nav className="flex justify-between bg-slate-200 px-4 py-2 rounded-md shadow-md">
      <Link href="/">
        <a className="flex items-center space-x- px-2 text-xl font-semibold text-gray-500">
          <span className="text-gray-400">JG</span>
        </a>
      </Link>
      <ul className="flex items-center space-x-4 justify-between text-xl font-semibold text-gray-500">
        {nav.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
