import statusGroup from '@/assets/Icons/statusGroup.svg'
import Clock from './Clock'
import { TOP_BAR_BG_CLASS } from '@/styles/variants'

const StatusBar = ({ color }: { color?: 'white' | 'gray' }) => {
  const bg = color ? TOP_BAR_BG_CLASS[color] : 'bg-transparent'
  return (
    <div className={`font-Body-2-b flex h-11 px-5 ${bg}`}>
      <div className="flex flex-grow items-center justify-between pt-1">
        <Clock />
        <img src={statusGroup} />
      </div>
    </div>
  )
}

export default StatusBar
