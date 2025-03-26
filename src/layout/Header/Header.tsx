import { JSX } from 'react/jsx-runtime';

import { HEADER_OPTION_LIST } from '@/constants/Header';

import * as S from './Header.styled';

type HeaderProps = {
  tabOption: string;
};

const Header = ({ tabOption }: HeaderProps): JSX.Element => {
  return (
    <S.HeaderContainer>
      <S.HeaderTitle>{tabOption}</S.HeaderTitle>
      <S.HeaderNavBar>
        <S.HeaderOptionList>
          {HEADER_OPTION_LIST.map((option) => (
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
