import { JSX } from 'react/jsx-runtime';
import { Outlet } from 'react-router';

import Header from './Header/Header';
import TabBar from './TabBar/TabBar';

import * as S from './Layout.styled';

const Layout = (): JSX.Element => {
  return (
    <S.TopLevelContainer>
      {/* tabOption 전역 상태 관리 */}
      <Header tabOption="친구" />

      <S.MainContent>
        <Outlet />
      </S.MainContent>

      <TabBar />
    </S.TopLevelContainer>
  );
};

export default Layout;
