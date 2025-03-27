import styled from 'styled-components';

import plusIcon from '@/assets/svgs/Friend/plus.svg?react';
import defaultProfileIcon from '@/assets/svgs/Friend/default-profile.svg?react';
import giftIcon from '@/assets/svgs/Friend/gift.svg?react';

// Friend List
export const PlusIcon = styled(plusIcon)`
  width: 1.4rem;
  height: fit-content;
`;

export const DefaultProfileIcon = styled(defaultProfileIcon)<{
  $size: number;
  $bgColor: string;
}>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;

  rect {
    fill: ${({ $bgColor }) => $bgColor};
  }
`;

export const GiftIcon = styled(giftIcon)`
  width: 1.4rem;
  height: fit-content;
`;
