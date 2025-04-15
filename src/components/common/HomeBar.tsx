import { BOTTOM_BAR_BG_CLASS } from '@/styles/variants'

const HomeBar = ({ color }: { color?: 'white' | 'gray' }) => {
  const bg = color ? BOTTOM_BAR_BG_CLASS[color] : 'bg-transparent'
  return (
    <div className={`flex h-[34px] items-end justify-center ${bg}`}>
      <div className="mb-2 h-[5px] w-[120px] rounded-[5px] bg-black"></div>
    </div>
  )
}

export default HomeBar
