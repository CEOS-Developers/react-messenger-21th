import * as s from '../components/Common/Common.Styled'
import { StatusBar, NavigationBar } from '../components/Common/Bar'
import { NavRole } from '../utils/constants'
import ChatListContent from '../components/ChatListContent/ChatListContent'

const ChatList = () => {
  return (
    <s.Container>
      <StatusBar $isTransparent={true} />
      <ChatListContent />
      <NavigationBar select={NavRole.CHAT_LIST} />
    </s.Container>
  )
}

export default ChatList
