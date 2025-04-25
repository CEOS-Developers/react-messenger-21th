import HomeIcon from '@/assets/images/navbar/Home.svg?react';
import ChatIcon from '@/assets/images/navbar/Chat.svg?react';
import OpenChatIcon from '@/assets/images/navbar/OpenChat.svg?react';
import MarketIcon from '@/assets/images/navbar/Market.svg?react';
import MoreIcon from '@/assets/images/navbar/More.svg?react';
import cn from '@/utils/cn';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const NAV_ITEMS = [
  {
    id: 0,
    path: PATH.HOME.base,
    icon: HomeIcon,
    label: '홈',
  },
  {
    id: 1,
    path: PATH.CHATTING.base,
    icon: ChatIcon,
    label: '채팅',
  },
  {
    id: 2,
    path: PATH.OPEN_CHATTING.base,
    icon: OpenChatIcon,
    label: '오픈채팅',
  },
  {
    id: 3,
    path: PATH.MARKET.base,
    icon: MarketIcon,
    label: '쇼핑',
  },
  {
    id: 4,
    path: PATH.MORE.base,
    icon: MoreIcon,
    label: '더보기',
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='w-full flex font-cap-med sticky bottom-0 py-3 border-t border-gray-100 bg-white z-50'>
      {NAV_ITEMS.map((item) => {
        const selectedPath = location.pathname.includes(item.path);
        const IconComponent = item.icon;
        return (
          <button
            key={item.id}
            className={cn(
              'w-full flex flex-col justify-center gap-1 text-gray-300 items-center cursor-pointer',
              {
                'text-blue-400': selectedPath,
              }
            )}
            onClick={() => navigate(item.path)}
          >
            <IconComponent className='w-7 h-7' />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navbar;
