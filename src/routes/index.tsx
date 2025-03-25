import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/views/Layout';
import Home from '@/views/Home';
import ChatList from '@/views/Chat/ChatList';
import ChatRoom from '@/views/Chat/ChatRoom';
import Call from '@/views/Call';
import Plus from '@/views/Plus';

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
