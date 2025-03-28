import { Route, Routes } from 'react-router';

import Layout from './layout/Layout';

import FriendPage from './pages/FriendPage/FriendPage';
import ChatList from './pages/Chat/List/ChatList';
import ChatRoom from './pages/Chat/Room/ChatRoom';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FriendPage />} />

        <Route path="chat">
          <Route index element={<ChatList />} />
          <Route path=":roomId" element={<ChatRoom />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
