import { useNavigate } from 'react-router'
import { NavRole } from '@/utils/constants'
import * as tab from '@/assets/Icons/NavigationBar'

const NavigationBar = ({ select }: { select: NavRole }) => {
  const nav = useNavigate()
  return (
    <div className="flex h-[54px] items-center justify-center">
      <div className="flex gap-[88.5px] pt-[1px]">
        <div className="cursor-pointer" onClick={() => nav('/')}>
          {select === NavRole.HOME ? <tab.HomeSelect /> : <tab.Home />}
        </div>
        <div className="cursor-pointer" onClick={() => nav('/chatList')}>
          {select === NavRole.CHAT_LIST ? <tab.ChatSelect /> : <tab.Chat />}
        </div>
        <div>
          <tab.Call />
        </div>
      </div>
    </div>
  )
}

export default NavigationBar
