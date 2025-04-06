import { Route, Routes } from 'react-router'
import { useEffect } from 'react'

/** styles */
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import GlobalStyle from './styles/GlobalStyle.ts'

/** pages */
import ChatRoom from './pages/ChatRoom.tsx'
import FriendsList from './pages/FriendsList.tsx'
import ChatList from './pages/ChatList.tsx'

/** static data */
import { userData } from './assets/data/user.json'
import { defaultUser } from './assets/data/defaultUser.ts'
import { chatRoomData } from './assets/data/chatRoom.json'

/** global states */
import { useUserStore } from './stores/useUserStore.ts'
import { useChatRoomStore } from './stores/useChatRoomStore.ts'

/** types */
import { ChatRoom as ChatRoomType } from './interface/ChatRoom.ts'
import ProfilePage from './pages/ProfilePage.tsx'

function App() {
  const userId = 1
  const { setUser } = useUserStore()
  const { setChatRoom } = useChatRoomStore()

  useEffect(() => {
    const userObj = userData.find((user) => user.id === userId) ?? defaultUser
    setUser(userObj)

    const joinedRooms = userObj.joinedRooms
      .map((joinedRoom) => {
        return chatRoomData.find(
          (roomData) => roomData.chatRoomId === joinedRoom.chatRoomId
        )
      })
      .filter(Boolean) as unknown as ChatRoomType[]

    setChatRoom(joinedRooms)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<FriendsList />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/room/:id" element={<ChatRoom />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
