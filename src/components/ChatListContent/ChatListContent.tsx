import { ChatListIcon } from '../../assets/Icons/Header'
import { Content } from '../common/Common.Styled'
import ContentHeader from '../common/ContentHeader'
import * as s from './ChatListContent.Styled'

const ChatListContent = () => {
  return (
    <Content>
      <ContentHeader
        $isTransparent={true}
        leftChild={<s.Title>대화</s.Title>}
        rightChild={<ChatListIcon />}
      />
    </Content>
  )
}

export default ChatListContent
