import SearchBtn from '@/assets/svgs/home/SearchBtn.svg?url';
import MoreBtn from '@/assets/svgs/home/MoreOn.svg?url';
import BackBtn from '@/assets/svgs/chatroom/BackBtn.svg?url';
import { useNavigate } from 'react-router-dom';

type ChatHeaderProps = {
  name: string;
  onClick?: () => void;
};

const ChatHeader = ({ name, onClick }: ChatHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-8 items-center justify-between bg-grey-100 sticky top-[44px] px-4">
      <img src={BackBtn} className="w-auto h-[32px] p-2 cursor-pointer" onClick={() => navigate('/chatlist')} />
      <span className="w-[256px] px-[10px] py-1 label-1" onClick={onClick}>
        {name}
      </span>
      <img src={SearchBtn} className="w-[24px] h-[24px] cursor-pointer" />
      <img src={MoreBtn} className="w-[24px] h-[24px] mr-[10px] cursor-pointer" />
    </div>
  );
};
export default ChatHeader;
