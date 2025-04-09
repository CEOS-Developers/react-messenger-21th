import * as s from './ToggleBox.Styled'
import Down from '../../assets/Icons/List/down.svg?react'
import Up from '../../assets/Icons/List/up.svg?react'

const ToggleBox = ({
  text,
  length,
  isOpen,
  setClosed,
}: {
  text: string
  length: number
  isOpen: boolean
  setClosed: (state: boolean) => void
}) => {
  return (
    <s.Container onClick={() => setClosed(!isOpen)}>
      <s.TextContainer>
        {text} {length}
      </s.TextContainer>
      <s.IconContainer>{isOpen ? <Down /> : <Up />}</s.IconContainer>
    </s.Container>
  )
}

export default ToggleBox
