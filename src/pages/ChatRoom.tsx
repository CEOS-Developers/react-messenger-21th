import * as s from '../components/Common/Common.Styled'

import ChatContent from '../components/ChatContent/ChatContent'
import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'

const ChatRoom = () => {
  return (
    <s.Container>
      <StatusBar color="gray" />
      <ChatContent />
      <HomeBar color="white" />
    </s.Container>
  )
}

export default ChatRoom
