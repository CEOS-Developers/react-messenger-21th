import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import HomeOn from '@/assets/svgs/home/HomeOn.svg?url';
import HomeOff from '@/assets/svgs/home/HomeOff.svg?url';
import ChatOn from '@/assets/svgs/home/ChatOn.svg?url';
import ChatOff from '@/assets/svgs/home/ChatOff.svg?url';
import MoreOn from '@/assets/svgs/home/MoreOn.svg?url';
import MoreOff from '@/assets/svgs/home/MoreOff.svg?url';

const menus = [
  {
    name: '홈',
    path: '/home',
    iconOn: HomeOn,
    iconOff: HomeOff,
  },
  {
    name: '채팅',
    path: '/chatlist',
    iconOn: ChatOn,
    iconOff: ChatOff,
  },
  {
    name: '설정',
    path: '/setting',
    iconOn: MoreOn,
    iconOff: MoreOff,
  },
];

const NavBar = () => {
  return (
    <div className="w-[375px] h-[86px] flex shrink-0 sticky bottom-0 shadow-default bg-grey-50">
      <div className="flex justify-center w-full pt-3 px-4 pb-6 h-full gap-[84px]">
        {menus.map((menu) => (
          <NavLink key={menu.name} to={menu.path}>
            {({ isActive }) => (
              <div
                className={clsx(
                  'flex flex-col items-center justify-center gap-[3px]',
                  isActive ? 'text-grey-900' : 'text-grey-400',
                )}
              >
                <img src={isActive ? menu.iconOn : menu.iconOff} alt={menu.name} className="w-[24px] h-[24px]" />
                <span className="caption-2">{menu.name}</span>
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
