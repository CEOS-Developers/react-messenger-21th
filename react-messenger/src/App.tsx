import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import OnBoarding from '@/pages/OnBoarding';
import Home from '@/pages/Home';
import ChatList from '@/pages/ChatList';
import ChatRoom from '@/pages/ChatRoom';
import Setting from '@/pages/Setting';
import Profile from '@/pages/Profile';
import ScrollToTop from '@/components/common/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path="/chat/:chatId" element={<ChatRoom />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
