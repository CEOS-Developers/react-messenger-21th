import { Route, Routes } from 'react-router'

/** styles */
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import GlobalStyle from './styles/GlobalStyle.ts'

/** pages */
import ChatRoom from './pages/ChatRoom.tsx'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<ChatRoom />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
