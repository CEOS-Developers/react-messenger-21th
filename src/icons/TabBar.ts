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

const createTabBarIcon = (
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
) => styled(Icon)<{ $isSelected: boolean }>`
  ${IconCommon}

  path {
    stroke: ${({ $isSelected, theme }) =>
      $isSelected && theme.colors.Primary.MainBlue};
  }
`;

export const UserIcon = createTabBarIcon(userIcon);
export const ChatIcon = createTabBarIcon(chatIcon);
export const GlobalIcon = createTabBarIcon(globalIcon);
export const ShopIcon = createTabBarIcon(shopIcon);
export const MoreIcon = createTabBarIcon(moreIcon);
