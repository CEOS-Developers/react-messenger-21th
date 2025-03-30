import * as s from './ContentHeader.Styled'

interface ContentHeaderProps {
  leftChild: React.ReactNode
  rightChild: React.ReactNode
  $isTransparent?: boolean
}

const ContentHeader = ({
  leftChild,
  rightChild,
  $isTransparent = false,
}: ContentHeaderProps) => {
  return (
    <s.HeaderDiv $isTransparent={$isTransparent}>
      {leftChild}
      {rightChild}
    </s.HeaderDiv>
  )
}

export default ContentHeader
