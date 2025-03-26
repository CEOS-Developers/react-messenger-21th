import { Route, Routes } from 'react-router';

import Layout from './layout/Layout';

import FriendPage from './pages/FriendPage/FriendPage';
import ChatList from './pages/Chat/List/ChatList';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FriendPage />} />
        <Route path="chat" element={<ChatList />} />
      </Route>
    </Routes>
  );
}

export default App;
