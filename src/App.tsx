import { Route, Routes } from 'react-router'

/** styles */
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import GlobalStyle from './styles/GlobalStyle.ts'

/** pages */
import ChatRoom from './pages/ChatRoom.tsx'
import FriendsList from './pages/FriendsList.tsx'
import ChatList from './pages/ChatList.tsx'
import { UserIdProvider } from './contexts/UserIdContext.tsx'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <UserIdProvider>
          <Routes>
            <Route path="/" element={<FriendsList />} />
            <Route path="/chatlist" element={<ChatList />} />
            <Route path="/room" element={<ChatRoom />} />
          </Routes>
        </UserIdProvider>
      </ThemeProvider>
    </>
  )
}

export default App
