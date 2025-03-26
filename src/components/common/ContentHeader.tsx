import styled from 'styled-components'

const ContentHeader = ({ leftChild, rightChild }) => {
  return (
    <HeaderDiv>
      {leftChild}
      {rightChild}
    </HeaderDiv>
  )
}

const HeaderDiv = styled.div`
  padding: 0px ${({ theme }) => theme.phoneGrid.margin};
  display: flex;
  justify-content: space-between;
`

export default ContentHeader
