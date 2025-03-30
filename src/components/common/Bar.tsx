import Clock from './Clock'
import StyledProps from '../../interface/StyledProps'
import * as s from './Bar.Styled'
import statusGroup from '../../assets/Icons/statusGroup.svg'
import * as tab from '../../assets/Icons/NavigationBar'
import { useNavigate } from 'react-router'
import { NavRole } from '../../utils/constants'
import { EventIcon } from './Common.Styled'

const StatusBar = ({ $isTransparent }: StyledProps) => {
  return (
    <s.StatusDiv $isTransparent={$isTransparent}>
      <s.StatusItem>
        <Clock />
      </s.StatusItem>
      <s.StatusItem>
        <img src={statusGroup} />
      </s.StatusItem>
    </s.StatusDiv>
  )
}

const HomeBar = ({ $isTransparent }: StyledProps) => {
  return (
    <s.HomeBarDiv $isTransparent={$isTransparent}>
      <s.BlackBar />
    </s.HomeBarDiv>
  )
}

type NavigationBarProps = {
  select: NavRole
}

const NavigationBar = ({ select }: NavigationBarProps) => {
  const nav = useNavigate()
  return (
    <s.NavBarDiv>
      <s.NavIconDiv>
        <EventIcon onClick={() => nav('/')}>
          {select === NavRole.HOME ? <tab.HomeSelect /> : <tab.Home />}
        </EventIcon>
        <EventIcon onClick={() => nav('/chatList')}>
          {select === NavRole.CHAT_LIST ? <tab.ChatSelect /> : <tab.Chat />}
        </EventIcon>
        <tab.Call />
      </s.NavIconDiv>
      <HomeBar $isTransparent={true} />
    </s.NavBarDiv>
  )
}

export { StatusBar, HomeBar, NavigationBar }
