import { JSX } from 'react/jsx-runtime';

import { PlusIcon } from '@/icons/Friend';

import * as S from './MultiProfileButton.styled';

const MultiProfileButton = (): JSX.Element => {
  return (
    <S.MultiProfileButtonContainer>
      멀티프로필
      <PlusIcon />
    </S.MultiProfileButtonContainer>
  );
};

export default MultiProfileButton;
