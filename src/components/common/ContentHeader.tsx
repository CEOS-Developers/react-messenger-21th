import * as s from './ContentHeader.Styled'

interface ContentHeaderProps {
  leftChild: React.ReactNode
  rightChild: React.ReactNode
}

const ContentHeader = ({ leftChild, rightChild }: ContentHeaderProps) => {
  return (
    <s.HeaderDiv>
      {leftChild}
      {rightChild}
    </s.HeaderDiv>
  )
}

export default ContentHeader
