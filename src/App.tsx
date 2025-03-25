import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";
import FriendPage from "./components/FriendPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <FriendPage />
        <NavBar />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  padding-top: 44px;
  position: relative;
  width: 375px;
  height: 100vh;
  background: rgb(255, 255, 255);
`;
