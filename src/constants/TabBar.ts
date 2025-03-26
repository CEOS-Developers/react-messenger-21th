import * as I from '@/icons/TabBar';

type TabBarType = {
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  path: string;
};

export const TAB_BAR_LIST: TabBarType[] = [
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
