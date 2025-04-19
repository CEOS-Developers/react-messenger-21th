import { Route, Routes } from 'react-router'
import { useEffect } from 'react'

/** styles */
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import '@/styles/global.css'

/** pages */
import ChatRoom from '@/pages/ChatRoom.tsx'
import FriendsList from '@/pages/FriendsList.tsx'
import ChatList from '@/pages/ChatList.tsx'
import ProfilePage from '@/pages/ProfilePage.tsx'
import MemberList from '@/pages/MemberList.tsx'

import setUserAndChatRoom from './utils/setUserAndChatRoom.ts'
import MemberChange from './pages/MemberChange.tsx'
import Layout from './components/Layout.tsx'
import InviteFriends from './pages/InviteFriends.tsx'

function App() {
  const userId = 1

  useEffect(() => {
    setUserAndChatRoom(userId)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<FriendsList />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/room/:id" element={<ChatRoom />} />
            <Route path="/room/:id/members" element={<MemberList />} />
            <Route path="/room/:id/members/change" element={<MemberChange />} />
            <Route
              path="/room/:id/members/invite"
              element={<InviteFriends />}
            />
          </Routes>
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
