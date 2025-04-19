import StatusBar from '@/components/Commons/StatusBar'
import ChatListContent from '@/components/ChatListContent/ChatListContent'
import NavigationBar from '@/components/Commons/NavigationBar'
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
