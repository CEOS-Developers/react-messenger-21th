import * as s from '../components/Common/Common.Styled'
import { NavigationBar } from '../components/Common/Bar'
import { NavRole } from '../utils/constants'
import ChatListContent from '../components/ChatListContent/ChatListContent'
import StatusBar from '@/components/Common/StatusBar'

const ChatList = () => {
  return (
    <s.Container>
      <StatusBar />
      <ChatListContent />
      <NavigationBar select={NavRole.CHAT_LIST} />
    </s.Container>
  )
}

export default ChatList
