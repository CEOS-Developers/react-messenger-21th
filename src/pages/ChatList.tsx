import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'
import NavigationBar from '@/components/Common/NavigationBar'
import ChatListContent from '@/components/ChatListContent/ChatListContent'
import { NavRole } from '@/utils/constants'

const ChatList = () => {
  return (
    <div>
      <StatusBar />
      <ChatListContent />
      <div className="border-gray08 bg-white">
        <NavigationBar select={NavRole.CHAT_LIST} />
        <HomeBar />
      </div>
    </div>
  )
}

export default ChatList
