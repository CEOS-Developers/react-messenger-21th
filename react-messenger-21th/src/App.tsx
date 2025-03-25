import { useState } from 'react';
import './App.css';
import ChatRoomPage from './components/pages/ChatRoomPage';
import { ThemeProvider } from 'styled-components';
import theme from './components/styles/theme';
import GlobalStyle from './components/styles/GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ChatRoomPage />
    </ThemeProvider>
  );
}

export default App;
