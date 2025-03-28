import Navbar from './Navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className='flex flex-1 flex-col relative'>{children}</main>
      <Navbar />
    </>
  );
};

export default MainLayout;
