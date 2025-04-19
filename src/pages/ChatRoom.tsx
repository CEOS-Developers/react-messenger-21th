import StatusBar from '@/components/Common/StatusBar'
import ChatContent from '@/components/ChatContent/ChatContent'

const ChatRoom = () => {
  return (
    <div className="wrapper">
      <StatusBar color="gray" />
      <ChatContent />
    </div>
  )
}

export default ChatRoom
