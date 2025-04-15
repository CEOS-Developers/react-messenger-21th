import * as s from '../components/Common/Common.Styled'
import { StatusBar, HomeBar } from '../components/Common/Bar'
import ChatContent from '../components/ChatContent/ChatContent'

const ChatRoom = () => {
  return (
    <s.Container>
      <StatusBar />
      <ChatContent />
      <HomeBar />
    </s.Container>
  )
}

export default ChatRoom
