import Search from '@/assets/svgs/home/SearchBtn.svg';
import Friend from '@/assets/svgs/home/FriendBtn.svg';
import Notification from '@/assets/svgs/home/NotificationBtn.svg';
import MoreBtn from '@/assets/svgs/home/MoreBtn.svg';

const NavBar = () => {
  return (
    <div className="flex  justify-end items-center w-full h-[44.63px] px-4 py-[10px]">
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
