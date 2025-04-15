import * as s from '../components/Common/Common.Styled'
import { HomeBar } from '../components/Common/Bar'
import ChatContent from '../components/ChatContent/ChatContent'
import StatusBar from '@/components/Common/StatusBar'

const ChatRoom = () => {
  return (
    <s.Container>
      <StatusBar color="gray" />
      <ChatContent />
      <HomeBar />
    </s.Container>
  )
}

export default ChatRoom
