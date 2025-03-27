const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col h-screen min-w-[320px] max-w-[40rem] mx-auto'>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
