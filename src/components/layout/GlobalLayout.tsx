const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col h-screen min-w-[20rem] max-w-[40rem] bg-white md:w-[28rem]'>
      <main className='flex relative flex-1 flex-col overflow-y-auto'>
        {children}
      </main>
    </div>
  );
};

export default GlobalLayout;
