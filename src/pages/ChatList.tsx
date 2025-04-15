import * as s from '../components/Common/Common.Styled'
import { NavRole } from '../utils/constants'
import ChatListContent from '../components/ChatListContent/ChatListContent'
import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'
import NavigationBar from '@/components/Common/NavigationBar'

const ChatList = () => {
  return (
    <s.Container>
      <StatusBar />
      <ChatListContent />
      <NavigationBar color="white" select={NavRole.CHAT_LIST} />
      <HomeBar color="white" />
    </s.Container>
  )
}

export default ChatList
