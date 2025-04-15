import { ChatListIcon } from '../../assets/Icons/AppBar'
import ChatListViewer from './ChatListViewer'
import HomeBar from '@/components/Common/HomeBar'
import NavigationBar from '@/components/Common/NavigationBar'
import { NavRole } from '@/utils/constants'

const ChatListContent = () => {
  return (
    <div className="container">
      <div className="pt-1">
        <div className="app-bar app-bar--62">
          <p className="font-Headline2">대화</p>
          <ChatListIcon />
        </div>
      </div>

      <ChatListViewer />

      <div className="border-gray08 bg-white">
        <NavigationBar select={NavRole.CHAT_LIST} />
        <HomeBar />
      </div>
    </div>
  )
}

export default ChatListContent
