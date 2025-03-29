import { JSX } from 'react/jsx-runtime';
import { Location, Outlet, useLocation, useParams } from 'react-router';

import Header from './Header/Header';
import TabBar from './TabBar/TabBar';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  const location: Location = useLocation();
  const { roomId } = useParams();

  const noHeaderTabBarRoutes = [`/chat/${roomId}`];

  const isNoHeaderTabBarRoute = noHeaderTabBarRoutes.includes(
    location.pathname
  );

  return (
    <S.TopLevelContainer>
      {!isNoHeaderTabBarRoute ? (
        <>
          <Header />

          <S.MainContent>
            <Outlet />
          </S.MainContent>

          <TabBar />
        </>
      ) : (
        <Outlet />
      )}
    </S.TopLevelContainer>
  );
};

export default Layout;
