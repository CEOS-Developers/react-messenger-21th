import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/views/Layout';
import Home from '@/views/Home/Home';
import ChatList from '@/components/chat/ChatList/ChatList';
import ChatRoom from '@/components/chat/ChatRoom/ChatRoom';
import Call from '@/views/Call/Call';
import Plus from '@/views/Plus/Plus';

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
    ],
  },
]);

export default router;
