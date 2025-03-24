import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavBar />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 100vh;
  background: rgb(255, 255, 255);
`;
