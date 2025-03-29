import { JSX } from 'react/jsx-runtime';

import * as S from './GiftButton.styled';
import { GiftIcon } from '@/icons/Friend';

const GiftButton = (): JSX.Element => {
  return (
    <S.GiftButtonContainer>
      <GiftIcon />
      선물하기
    </S.GiftButtonContainer>
  );
};

export default GiftButton;
