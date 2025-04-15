import Search from '@/assets/svgs/home/SearchBtn.svg?url';
import Friend from '@/assets/svgs/home/FriendBtn.svg?url';
import Notification from '@/assets/svgs/home/NotificationBtn.svg?url';
import MoreBtn from '@/assets/svgs/home/MoreBtn.svg?url';

const TopBar = () => {
  return (
    <div className="flex justify-end items-center w-[375px] h-[44.6px] px-4 py-[10px] bg-grey-50">
      <div className="flex gap-[14px]">
        <img src={Search} alt="검색" width={24} height={24} className="cursor-pointer" />
        <img src={Friend} alt="친구" width={24} height={24} className="cursor-pointer" />
        <img src={Notification} alt="알림" width={24} height={24} className="cursor-pointer" />
        <img src={MoreBtn} alt="더보기" width={24} height={24} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default TopBar;
