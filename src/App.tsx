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
import ProfilePage from './pages/ProfilePage.tsx'

import setUserAndChatRoom from './utils/setUserAndChatRoom.ts'

function App() {
  const userId = 1

  useEffect(() => {
    setUserAndChatRoom(userId)
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
