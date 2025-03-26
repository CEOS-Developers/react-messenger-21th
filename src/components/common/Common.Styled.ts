import styled from 'styled-components'
import { Body_2 } from '../../styles/Typo.Styled'
import StyledProps from '../../interface/styledProps'

/* 전체 컨테이너 */
const Container = styled.div`
  background: ${({ theme }) => theme.colors.chatBackground};
  width: ${({ theme }) => theme.phoneGrid.width};
  height: ${({ theme }) => theme.phoneGrid.height};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 0 8px #9aa6b230;
`

/* 헤더, 푸터 제외한 모든 영역을 가질 컴포넌트 */
const Content = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

/* 상단 Status Bar */
const StatusDiv = styled.div<StyledProps>`
  background-color: ${({ $isTransparent, theme }) =>
    $isTransparent ? 'transparent' : theme.colors.white};
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

export { Container, Content, StatusDiv, StatusItem, HomeBarDiv, BlackBar }
