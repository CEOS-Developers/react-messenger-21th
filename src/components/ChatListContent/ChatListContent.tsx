import { ChatListIcon } from '../../assets/Icons/AppBar'
import * as s from './ChatListContent.Styled'
import ChatListViewer from './ChatListViewer'

const ChatListContent = () => {
  return (
    <s.CLContent>
      <div className="pt-1">
        <div className="app-bar app-bar--62">
          <s.Title>대화</s.Title>
          <ChatListIcon />
        </div>
      </div>
      <ChatListViewer />
    </s.CLContent>
  )
}

export default ChatListContent
