import StatusBar from '@/components/Common/StatusBar'
import HomeBar from '@/components/Common/HomeBar'
import ChatContent from '@/components/ChatContent/ChatContent'

const ChatRoom = () => {
  return (
    <div>
      <StatusBar color="gray" />
      <ChatContent />
      <HomeBar />
    </div>
  )
}

export default ChatRoom
