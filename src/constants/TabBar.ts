import { TabBarOptionList } from '@/types/TabBar.types';

import * as I from '@/icons/TabBar';

type TabBarOptionType = {
  name: TabBarOptionList;
  icon: React.ComponentType<{ $isSelected: boolean }>;
  path: string;
};

export const TAB_BAR_OPTION_LIST: TabBarOptionType[] = [
  {
    name: '친구',
    icon: I.UserIcon,
    path: '/',
  },
  {
    name: '채팅',
    icon: I.ChatIcon,
    path: '/chat',
  },
  {
    name: '오픈채팅',
    icon: I.GlobalIcon,
    path: '/open-chat',
  },
  {
    name: '쇼핑',
    icon: I.ShopIcon,
    path: '/shop',
  },
  {
    name: '더보기',
    icon: I.MoreIcon,
    path: '/more',
  },
];
