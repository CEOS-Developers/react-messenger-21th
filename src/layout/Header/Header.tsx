import { JSX } from 'react/jsx-runtime';

import { HEADER_OPTION_LIST } from '@/constants/Header';

import { useTabBarOption } from '@/stores/useTabBarOption';
import { Page, useHeaderOption } from '@/stores/useHeaderOption';

import * as S from './Header.styled';

const Header = (): JSX.Element => {
  const { selectedTab } = useTabBarOption();
  const { isSearchBarOpen, setIsSearchBarOpen } = useHeaderOption();

  const HEADER_OPTION = {
    친구: 'friend',
    채팅: 'chat',
    오픈채팅: 'openChat',
    쇼핑: 'shop',
    더보기: 'more',
  };

  const selectedHeaderOption = HEADER_OPTION[selectedTab];

  return (
    <S.HeaderContainer>
      <S.HeaderTitle>{selectedTab}</S.HeaderTitle>
      <S.HeaderNavBar>
        <S.HeaderOptionList>
          {HEADER_OPTION_LIST[selectedTab].map((option) => {
            const isSearchIcon = option.name === 'Search';

            return (
              <S.HeaderOptionItem key={option.name}>
                {isSearchIcon ? (
                  <S.HeaderOptionButton
                    onClick={() =>
                      setIsSearchBarOpen(
                        selectedHeaderOption as Page,
                        !isSearchBarOpen[selectedHeaderOption]
                      )
                    }
                  >
                    <option.icon />
                  </S.HeaderOptionButton>
                ) : (
                  <S.HeaderOptionButton>
                    <option.icon />
                  </S.HeaderOptionButton>
                )}
              </S.HeaderOptionItem>
            );
          })}
        </S.HeaderOptionList>
      </S.HeaderNavBar>
    </S.HeaderContainer>
  );
};

export default Header;
