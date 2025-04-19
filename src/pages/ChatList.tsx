import StatusBar from '@/components/Common/StatusBar'
import ChatListContent from '@/components/ChatListContent/ChatListContent'
import NavigationBar from '@/components/Common/NavigationBar'
import { NavRole } from '@/utils/constants'

const ChatList = () => {
  return (
    <div className="wrapper">
      <StatusBar />
      <ChatListContent />
      <NavigationBar color="white" select={NavRole.CHAT_LIST} />
    </div>
  )
}

export default ChatList
