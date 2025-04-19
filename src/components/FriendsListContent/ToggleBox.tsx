import Down from '@/assets/Icons/List/down.svg?react'
import Up from '@/assets/Icons/List/up.svg?react'

const ToggleBox = ({
  text,
  length,
  isOpen,
  setClosed,
}: {
  text: string
  length: number
  isOpen: boolean
  setClosed: (state: boolean) => void
}) => {
  return (
    <div
      className="flex h-[41px] items-center justify-between pb-2"
      onClick={() => setClosed(!isOpen)}>
      <div className="font-Body-2-b">
        {text} {length}
      </div>
      <div className="cursor-pointer">{isOpen ? <Down /> : <Up />}</div>
    </div>
  )
}

export default ToggleBox
