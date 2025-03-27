import { Routes, Route } from "react-router-dom";
import ChatList from "./pages/ChatList";
import {
  NewsPage,
  HomePage,
  NeighborPage,
  SubscribePage,
  PopularPage,
} from "./pages/MockPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ChatList />}></Route>
      <Route path="/chat" element={<ChatList />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/neighbor" element={<NeighborPage />}></Route>
      <Route path="/subscribe" element={<SubscribePage />}></Route>
      <Route path="/popular" element={<PopularPage />}></Route>
      <Route path="/news" element={<NewsPage />}></Route>
    </Routes>
  );
}

export default App;
