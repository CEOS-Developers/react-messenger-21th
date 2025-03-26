import styled from 'styled-components';

import plusIcon from '@/assets/svgs/Friend/plus.svg?react';
import defaultProfileIcon from '@/assets/svgs/Friend/default-profile.svg?react';

export const PlusIcon = styled(plusIcon)`
  width: 1.4rem;
  height: fit-content;
`;

export const DefaultProfileIcon = styled(defaultProfileIcon)<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;
