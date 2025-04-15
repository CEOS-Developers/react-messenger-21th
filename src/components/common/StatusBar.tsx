import statusGroup from '../../assets/Icons/statusGroup.svg'
import Clock from './Clock'

const StatusBar = () => {
  return (
    <div className="font-Body-2-b flex h-11 items-center justify-between px-5 pt-1">
      <Clock />
      <img src={statusGroup} />
    </div>
  )
}

export default StatusBar
