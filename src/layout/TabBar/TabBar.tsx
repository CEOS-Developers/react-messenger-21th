import { JSX } from 'react/jsx-runtime';

import { TAB_BAR_OPTION_LIST } from '@/constants/TabBar';

import { useTabBarOption } from '@/stores/useTabBarOption';

import * as S from './TabBar.styled';

const TabBar = (): JSX.Element => {
  const { setSelectedTab } = useTabBarOption();

  return (
    <S.TabBarContainer>
      <S.TabBarList>
        {TAB_BAR_OPTION_LIST.map((tab) => (
          <S.TabBarItem key={tab.name}>
            <S.TabBarLink
              to={tab.path}
              onClick={() => setSelectedTab(tab.name)}
            >
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
