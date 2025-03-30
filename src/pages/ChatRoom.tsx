import * as s from '../components/common/Common.Styled'
import { StatusBar, HomeBar } from '../components/common/Bar'
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
