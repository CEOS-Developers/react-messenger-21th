import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import ChatList from '@/pages/ChatList';
import ChatRoom from '@/pages/ChatRoom';
import Setting from '@/pages/Setting';
import Profile from '@/pages/Profile';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/chatlist" element={<ChatList />} />
          <Route path="/chatroom" element={<ChatRoom />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
