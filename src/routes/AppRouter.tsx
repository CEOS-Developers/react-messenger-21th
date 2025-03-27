import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Suspense } from 'react';
import { PATH } from '@/constants/path';
import Layout from '@/components/layout/Layout';
import { Loading } from '@/components/loading/Loading';
import { Chatting, Home, Market, More, OpenChatting } from '@/pages';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: (
      <Suspense fallback={<Loading />}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Navigate to={PATH.HOME.base} replace />,
      },
      {
        path: PATH.HOME.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: PATH.CHATTING.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Chatting />,
          },
        ],
      },
      {
        path: PATH.HOME.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <OpenChatting />,
          },
        ],
      },
      {
        path: PATH.HOME.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Market />,
          },
        ],
      },
      {
        path: PATH.HOME.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <More />,
          },
        ],
      },
      {
        path: '*',
        element: <Loading />, // 에러 페이지로 수정
      },
    ],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
