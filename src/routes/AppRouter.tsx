import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import { Suspense } from 'react';
import { PATH } from '@/constants/path';
import GlobalLayout from '@/components/layout/GlobalLayout';
import MainLayout from '@/components/layout/MainLayout';
import { Loading } from '@/components/loading/Loading';
import { Chatting, Home, Market, More, OpenChatting } from '@/pages';
import MyProfile from '@/pages/home/MyProfile';

const router = createBrowserRouter([
  {
    path: PATH.ROOT,
    element: (
      <Suspense fallback={<Loading />}>
        <GlobalLayout>
          <Outlet />
        </GlobalLayout>
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
            element: (
              <MainLayout>
                <Home />
              </MainLayout>
            ),
          },
          {
            path: PATH.HOME.myProfile,
            element: <MyProfile />,
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
        path: PATH.OPEN_CHATTING.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <MainLayout>
                <Loading />
              </MainLayout>
            ),
          },
        ],
      },
      {
        path: PATH.MARKET.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <MainLayout>
                <Loading />
              </MainLayout>
            ),
          },
        ],
      },
      {
        path: PATH.MORE.base,
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <MainLayout>
                <Loading />
              </MainLayout>
            ),
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
