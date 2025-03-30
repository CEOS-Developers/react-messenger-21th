import Clock from './Clock'
import StyledProps from '../../interface/StyledProps'
import * as s from './Bar.Styled'
import statusGroup from '../../assets/Icons/statusGroup.svg'
import { TabCall, TabChat, TabHome } from '../../assets/Icons/NavigationBar'

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

const NavigationBar = () => {
  return (
    <s.NavBarDiv>
      <TabHome />
      <TabChat />
      <TabCall />
    </s.NavBarDiv>
  )
}

export { StatusBar, HomeBar, NavigationBar }
