import Clock from './Clock'
import { StatusDiv, StatusItem, HomeBarDiv, BlackBar } from './Common.Styled'
import StyledProps from '../../interface/styledProps'
import statusGroup from '../../assets/Icons/statusGroup.svg'

const StatusBar = ({ $isTransparent }: StyledProps) => {
  return (
    <StatusDiv $isTransparent={$isTransparent}>
      <StatusItem>
        <Clock />
      </StatusItem>
      <StatusItem>
        <img src={statusGroup} />
      </StatusItem>
    </StatusDiv>
  )
}

const HomeBar = ({ $isTransparent }: StyledProps) => {
  return (
    <HomeBarDiv $isTransparent={$isTransparent}>
      <BlackBar />
    </HomeBarDiv>
  )
}

export { StatusBar, HomeBar }
