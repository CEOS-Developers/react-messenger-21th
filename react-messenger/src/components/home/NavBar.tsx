import Search from '@/assets/svgs/home/SearchBtn.svg';
import Friend from '@/assets/svgs/home/FriendBtn.svg';
import Notification from '@/assets/svgs/home/NotificationBtn.svg';
import MoreBtn from '@/assets/svgs/home/MoreBtn.svg';

const NavBar = () => {
  return (
    <div className="flex fixed top-0 justify-end items-center w-[375px] h-[44.6px] px-4 py-[10px] bg-grey-50">
      <div className="flex gap-[14px]">
        <img src={Search} alt="검색" width={24} height={24} className="cursor-pointer" />
        <img src={Friend} alt="친구" width={24} height={24} className="cursor-pointer" />
        <img src={Notification} alt="알림" width={24} height={24} className="cursor-pointer" />
        <img src={MoreBtn} alt="더보기" width={24} height={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavBar;
