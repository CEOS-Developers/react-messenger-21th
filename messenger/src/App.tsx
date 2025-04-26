import { Routes, Route } from 'react-router-dom';
import ChatList from './pages/ChatList';
import Chat from './pages/Chat';
import AddChatPage from './pages/AddChatPage';
import {
  NewsPage,
  HomePage,
  NeighborPage,
  SubscribePage,
  PopularPage,
} from './pages/MockPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<ChatList />}
      />
      <Route
        path="/chat-list"
        element={<ChatList />}
      />
      <Route
        path="/chat/:roomId"
        element={<Chat />}
      />
      <Route
        path="/chat/add-chat"
        element={<AddChatPage />}
      />
      <Route
        path="/news"
        element={<NewsPage />}
      />
      <Route
        path="/home"
        element={<HomePage />}
      />
      <Route
        path="/neighbor"
        element={<NeighborPage />}
      />
      <Route
        path="/subscribe"
        element={<SubscribePage />}
      />
      <Route
        path="/popular"
        element={<PopularPage />}
      />
      <Route
        path="/news"
        element={<NewsPage />}
      />
    </Routes>
  );
}

export default App;
