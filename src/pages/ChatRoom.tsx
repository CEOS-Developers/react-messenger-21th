import { Container } from '../components/common/Common.Styled'
import { StatusBar, HomeBar } from '../components/common/Bar'

const ChatRoom = () => {
  const s = { Container }
  return (
    <div>
      <s.Container>
        <StatusBar />
        <HomeBar />
      </s.Container>
    </div>
  )
}

export default ChatRoom
