import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/views/Layout';
import Home from '@/components/home/Home';
import ChatList from '@/components/chat/ChatList/ChatList';
import ChatRoom from '@/components/chat/ChatRoom/ChatRoom';
import Call from '@/components/call/Call';
import Plus from '@/components/plus/Plus';
import Profile from '@/components/profile/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'chat', element: <ChatList /> },
      { path: 'chat/:chatId', element: <ChatRoom /> },
      { path: 'call', element: <Call /> },
      { path: 'plus', element: <Plus /> },
      { path: 'profile/:userId', element: <Profile /> },
    ],
  },
]);

export default router;
