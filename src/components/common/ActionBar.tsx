const ActionBar = ({
  backIcon,
  title,
  isActive,
  nextText,
  onClick,
}: {
  backIcon: React.ReactNode
  title: string
  isActive: boolean
  nextText: string
  onClick: () => void
}) => {
  const buttonStyle = isActive ? 'cursor-pointer text-blue' : 'text-gray06'
  return (
    <div className="app-bar">
      {backIcon}
      <h1 className="font-Headline3">{title}</h1>
      <button
        onClick={onClick}
        disabled={!isActive}
        className={`font-Body-1-m ${buttonStyle}`}>
        {nextText}
      </button>
    </div>
  )
}

export default ActionBar
