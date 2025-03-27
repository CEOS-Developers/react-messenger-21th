import { Routes, Route } from "react-router-dom";
import ChatList from "./pages/ChatList";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatList />}></Route>
    </Routes>
  );
}

export default App;
