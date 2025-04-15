import { ChatListIcon } from '../../assets/Icons/AppBar'
import ContentHeader from '../Common/ContentHeader'
import * as s from './ChatListContent.Styled'
import ChatListViewer from './ChatListViewer'

const ChatListContent = () => {
  return (
    <s.CLContent>
      <ContentHeader
        $isTransparent={true}
        leftChild={<s.Title>대화</s.Title>}
        rightChild={<ChatListIcon />}
      />
      <ChatListViewer />
    </s.CLContent>
  )
}

export default ChatListContent
