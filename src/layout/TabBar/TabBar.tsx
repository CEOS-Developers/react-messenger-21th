import { JSX } from 'react/jsx-runtime';

import { TAB_BAR_LIST } from '@/constants/TabBar';

import * as S from './TabBar.styled';

const TabBar = (): JSX.Element => {
  return (
    <S.TabBarContainer>
      <S.TabBarList>
        {TAB_BAR_LIST.map((tab) => (
          <S.TabBarItem key={tab.name}>
            <S.TabBarLink to={tab.path}>
              <tab.icon />
              <S.TabBarOption>{tab.name}</S.TabBarOption>
            </S.TabBarLink>
          </S.TabBarItem>
        ))}
      </S.TabBarList>
    </S.TabBarContainer>
  );
};

export default TabBar;
