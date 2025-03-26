import { Content } from '../common/Common.Styled'
import ContentHeader from '../common/ContentHeader'
import TextInput from './TextInput'
import { ChatRoomIcon } from '../../assets/Icons/Header'
import ChatTitle from './ChatTitle'

const MY_USER_ID = 0
const mockData = {
  //chatList
  roomName: '이채현',
  member: [0, 1], //user.id
}
const mockData2 = {
  roomName: 'CEOS 21기 공지방',
  member: Array.from({ length: 50 }, (_, i) => i),
}

const ChatContent = () => {
  const s = { Content }
  // filter: 나를 제외한 멤버를 props로
  const titleData = {
    ...mockData2,
    member: [...mockData2.member].filter((id) => id !== MY_USER_ID),
  }
  return (
    <s.Content>
      <ContentHeader
        leftChild={<ChatTitle {...titleData} />}
        rightChild={<ChatRoomIcon />}
      />
      <div>말풍선1, 말풍선2, ...</div>
      <TextInput />
    </s.Content>
  )
}
export default ChatContent
