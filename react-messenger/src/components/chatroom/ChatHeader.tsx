import SearchBtn from '@/assets/svgs/home/SearchBtn.svg';
import MoreBtn from '@/assets/svgs/home/MoreOn.svg';
import BackBtn from '@/assets/svgs/chatroom/BackBtn.svg';

type ChatHeaderProps = {
  name: string;
};

const ChatHeader = ({ name }: ChatHeaderProps) => {
  return (
    <div className="flex w-full h-8 items-center justify-between">
      <img src={BackBtn} className="w-[21px] h-[32px] p-2" />
      <span className="w-[256px] px-[10px] py-1 text-label1 font-semibold">{name}</span>
      <img src={SearchBtn} className="w-[32px] h-[32px] py-1" />
      <img src={MoreBtn} className="w-[32px] h-[32px] p-1" />
    </div>
  );
};
export default ChatHeader;
