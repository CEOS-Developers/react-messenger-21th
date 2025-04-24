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
import MemberChange from '@/pages/MemberChange.tsx'
import InviteFriends from '@/pages/InviteFriends.tsx'
import CreateGroup from '@/pages/CreateGroup.tsx'
import GroupSettings from '@/pages/GroupSettings.tsx'

import setUserAndChatRoom from './utils/setUserAndChatRoom.ts'
import Layout from './components/Layout.tsx'
import { usePersistUserStore } from './stores/usePersistUserStore.ts'

function App() {
  const { curUserId } = usePersistUserStore()

  useEffect(() => {
    setUserAndChatRoom(curUserId)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<FriendsList />} />
            <Route path="/group" element={<CreateGroup />} />
            <Route path="/group/settings" element={<GroupSettings />} />
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
