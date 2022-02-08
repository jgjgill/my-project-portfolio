import Navbar from './navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="space-y-2 px-4 py-2 w-full flex flex-col">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
