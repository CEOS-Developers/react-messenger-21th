//import { useState } from 'react';
import './App.css';
import ChatRoomPage from './components/pages/ChatRoomPage';
import { ThemeProvider } from 'styled-components';
import theme from './components/styles/theme';
import GlobalStyle from './components/styles/GlobalStyles';
import styled from 'styled-components';

function App() {
  return (
    <AppWrapper>
      <ChatWrapper>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ChatRoomPage />
        </ThemeProvider>
      </ChatWrapper>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
  width: 100vw;
  height: 100dvh;
  overflow: auto;
`;

const ChatWrapper = styled.div`
  width: 375px;
  height: 100dvh;
  min-height: 100dvh;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  background-color: white;

  @media (max-width: 420px) {
    width: 100vw;
    height: 100dvh;
    border-radius: 0;
    box-shadow: none;
  }
`;

export default App;
