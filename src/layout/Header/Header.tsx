import { JSX } from 'react/jsx-runtime';

import { HEADER_OPTION_LIST } from '@/constants/Header';

import { useTabBarOption } from '@/stores/useTabBarOption';

import * as S from './Header.styled';

const Header = (): JSX.Element => {
  const { selectedTab } = useTabBarOption();

  return (
    <S.HeaderContainer>
      <S.HeaderTitle>{selectedTab}</S.HeaderTitle>
      <S.HeaderNavBar>
        <S.HeaderOptionList>
          {HEADER_OPTION_LIST[selectedTab].map((option) => (
            <S.HeaderOptionItem key={option.name}>
              <S.HeaderOptionButton>
                <option.icon />
              </S.HeaderOptionButton>
            </S.HeaderOptionItem>
          ))}
        </S.HeaderOptionList>
      </S.HeaderNavBar>
    </S.HeaderContainer>
  );
};

export default Header;
