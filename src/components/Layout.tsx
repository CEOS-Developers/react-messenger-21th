const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-chat mx-auto h-screen w-screen max-w-[375px] overflow-auto shadow-[0_0_8px_#9aa6b230]">
      {children}
    </div>
  )
}

export default Layout
