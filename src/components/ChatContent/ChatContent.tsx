import { Content } from '../common/Common.Styled'
import ContentHeader from '../common/ContentHeader'
import TextInput from './TextInput'

const ChatContent = () => {
  const s = { Content }

  return (
    <s.Content>
      <ContentHeader leftChild={<div>left</div>} rightChild={<div>left</div>} />
      <div>2</div>
      <TextInput />
    </s.Content>
  )
}
export default ChatContent
