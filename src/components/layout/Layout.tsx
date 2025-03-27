import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col relative h-screen min-w-[20rem] max-w-[40rem] md:w-[28rem]'>
      <main className='flex flex-1'>{children}</main>
      <Navbar />
    </div>
  );
};

export default Layout;
