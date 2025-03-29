import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";
import FriendPage from "./pages/FriendPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import ChatRoomPage from "./pages/ChatRoomPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FriendPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/chatRoom" element={<ChatRoomPage />} />
          </Routes>
          <NavBar />
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  padding-top: 44px;
  position: relative;
  width: 375px;
  height: 100dvh;
  background: rgb(255, 255, 255);
  overflow: hidden;
`;
