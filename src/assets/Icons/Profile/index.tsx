import styled from 'styled-components'
import StyledProps from '../../../interface/StyledProps'
// import PeoplesBig from './Peoples-big.svg?react'
// import PeoplesDefault from './Peoples-default.svg?react'
// import PeoplesMini from './Peoples-mini.svg?react'

// const ProfileBig = styled.div`
//   width: 102px;
//   height: 102px;
//   border-radius: 100%;
//   border: 1.4px solid ${({ theme }) => theme.colors.gray13}
//   background: ${({ color }) => color}

//   display: flex;
//   justify-content: center;
// `

const ProfileMedium = styled.div<StyledProps>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1.4px solid ${({ theme }) => theme.colors.gray13};
  background: ${({ $color, theme }) => theme.colors[$color || 'skyblue']};

  display: flex;
  justify-content: center;
  align-items: center;
`

export { ProfileMedium }
