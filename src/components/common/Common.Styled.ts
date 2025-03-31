import styled from 'styled-components'

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

const EventIcon = styled.div`
  cursor: pointer;
  display: flex;
`

const ScrollDiv = styled.div`
  flex-grow: 1;
  padding: 0px 20px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`

export { Container, Content, EventIcon, ScrollDiv }
