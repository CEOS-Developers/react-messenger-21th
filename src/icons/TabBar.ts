import styled, { css } from 'styled-components';

import userIcon from '@/assets/svgs/TabBar/user.svg?react';
import chatIcon from '@/assets/svgs/TabBar/chat.svg?react';
import globalIcon from '@/assets/svgs/TabBar/global.svg?react';
import shopIcon from '@/assets/svgs/TabBar/shop.svg?react';
import moreIcon from '@/assets/svgs/TabBar/more.svg?react';

const IconCommon = css`
  width: 2.4rem;
  height: fit-content;
`;

export const UserIcon = styled(userIcon)`
  ${IconCommon}
`;

export const ChatIcon = styled(chatIcon)`
  ${IconCommon}
`;

export const GlobalIcon = styled(globalIcon)`
  ${IconCommon}
`;

export const ShopIcon = styled(shopIcon)`
  ${IconCommon}
`;

export const MoreIcon = styled(moreIcon)`
  ${IconCommon}
`;
