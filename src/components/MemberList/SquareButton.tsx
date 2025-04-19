const SquareButton = ({
  text,
  isOut,
  onClick,
}: {
  text: string
  isOut: boolean
  onClick: () => void
}) => {
  const style = isOut ? 'text-red border-red' : 'text-gray12 border-none'
  return (
    <div
      className={`bg-gray04 font-Body-1-m cursor-pointer rounded px-5 py-2.5 text-start ${style}`}
      onClick={onClick}>
      {text}
    </div>
  )
}

export default SquareButton
