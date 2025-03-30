import styled from 'styled-components'
import StyledProps from '../../interface/StyledProps'
import { Body_2 } from '../../styles/Typo.Styled'

/* 상단 Status Bar */
const StatusDiv = styled.div<StyledProps>`
  background-color: ${({ $isTransparent, theme }) =>
    $isTransparent ? 'transparent' : theme.colors.gray02};
  padding: 0px ${({ theme }) => theme.phoneGrid.margin};
  height: 44px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StatusItem = styled.div<StyledProps>`
  margin-top: 4px;
  ${Body_2}
`

/* 하단 Home Bar */
const HomeBarDiv = styled.div<StyledProps>`
  height: 34px;
  background-color: ${({ $isTransparent, theme }) =>
    $isTransparent ? 'transparent' : theme.colors.white};
  display: flex;
  justify-content: center;
`

const BlackBar = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 150px;
  height: 5px;
  border-radius: 5px;
  margin-top: 21px;
`

const NavBarDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.gray01};
`

const NavIconDiv = styled.div`
  padding-top: 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray08};
  height: calc(54px - 9px);

  display: flex;
  justify-content: center;
  gap: 88.5px;
`

export { StatusDiv, StatusItem, HomeBarDiv, BlackBar, NavBarDiv, NavIconDiv }
