const GroupItem = ({
  children,
  text,
  onClick,
}: {
  children: React.ReactNode
  text: string
  onClick?: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center ${onClick && 'cursor-pointer'}`}>
      {children}
      <p className="text-gray09 font-Body-2-r">{text}</p>
    </div>
  )
}

export default GroupItem
