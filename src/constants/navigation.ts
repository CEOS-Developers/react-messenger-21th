import * as Icons from '@/assets/icons/navigation';

const NAV_ITEMS = [
  {
    label: '홈',
    path: '/',
    lineIcon: Icons.HomeLine,
    solidIcon: Icons.HomeSolid,
  },
  {
    label: '대화',
    path: '/chat',
    lineIcon: Icons.ChatLine,
    solidIcon: Icons.ChatSolid,
  },
  {
    label: '통화',
    path: '/call',
    lineIcon: Icons.CallLine,
    solidIcon: Icons.CallSolid,
  },
  {
    label: '더보기',
    path: '/plus',
    lineIcon: Icons.PlusLine,
    solidIcon: Icons.PlusSolid,
  },
];

export { NAV_ITEMS };
