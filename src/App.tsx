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

import { useUserStore } from './stores/useUserStore.ts'
import { defaultUser } from './assets/data/defaultUser.ts'
import { userData } from './assets/data/user.json'

function App() {
  const userId = 1
  const { setUser } = useUserStore()

  useEffect(() => {
    const userObj = userData.find((user) => user.id === userId) ?? defaultUser
    setUser(userObj)
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<FriendsList />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/room/:id" element={<ChatRoom />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
