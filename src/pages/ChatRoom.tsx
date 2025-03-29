import { Container, Content } from '../components/common/Common.Styled'
import { StatusBar, HomeBar } from '../components/common/Bar'
import ChatContent from '../components/ChatContent/ChatContent'

const ChatRoom = () => {
  const s = { Container, Content }
  return (
    <s.Container>
      <StatusBar />
      <ChatContent />
      <HomeBar />
    </s.Container>
  )
}

export default ChatRoom
