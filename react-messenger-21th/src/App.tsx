//import { useState } from 'react';
// 라우터 설정
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ChatRoomPage from './components/pages/ChatRoomPage';
import ProfilePage from './components/pages/ProfilePage';
import ShowChatRoomPage from './components/pages/ShowChatRoomPage';
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
          <Router>
            <Routes>
              <Route path="/" element={<ProfilePage />} />
              <Route path="/chats" element={<ShowChatRoomPage />} />
              <Route path="/chat/:roomId" element={<ChatRoomPage />} />
            </Routes>
          </Router>
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
  width: 100dvw;
  height: 100dvh;
  overflow: auto;
`;

const ChatWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px; // PC 최대 너비 제한
  max-height: 728px; // PC 최대 높이 제한
  min-height: 100dvh;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;
  background-color: white;

  @media (max-width: 420px) {
    width: 100vw;
    height: 100dvh;
    max-width: 100vw;
    max-height: 100dvh;
    border-radius: 0;
    box-shadow: none;
  }
`;

export default App;
