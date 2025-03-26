import { NavLink } from 'react-router-dom';
import HomeOn from '@/assets/svgs/home/HomeOn.svg';
import HomeOff from '@/assets/svgs/home/HomeOff.svg';
import ChatOn from '@/assets/svgs/home/ChatOn.svg';
import ChatOff from '@/assets/svgs/home/ChatOff.svg';
import MoreOn from '@/assets/svgs/home/MoreOn.svg';
import MoreOff from '@/assets/svgs/home/MoreOff.svg';

const menus = [
  {
    name: '홈',
    path: '/',
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

const BottomMenu = () => {
  return (
    <div className="w-[375px] h-[86px] fixed bottom-0 shadow-bottommenu bg-grey-50">
      <div className="flex justify-center w-full pt-3 px-4 pb-6 h-auto gap-[84px]">
        {menus.map((menu) => (
          <NavLink
            key={menu.name}
            to={menu.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-[3px] ${isActive ? 'text-grey-900' : 'text-grey-400'}`
            }
          >
            {({ isActive }) => (
              <>
                <img src={isActive ? menu.iconOn : menu.iconOff} alt={menu.name} className="w-[24px] h-[24px]" />
                <span className="text-caption2 font-medium">{menu.name}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BottomMenu;
