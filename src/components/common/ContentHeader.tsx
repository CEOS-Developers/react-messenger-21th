import * as s from './ContentHeader.Styled'

const ContentHeader = ({ leftChild, rightChild }) => {
  return (
    <s.HeaderDiv>
      {leftChild}
      {rightChild}
    </s.HeaderDiv>
  )
}

export default ContentHeader
