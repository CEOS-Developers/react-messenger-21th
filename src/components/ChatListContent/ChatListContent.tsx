import ChatListViewer from './ChatListViewer'
import { ChatListIcon } from '@/assets/Icons/AppBar'

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
    </div>
  )
}

export default ChatListContent
