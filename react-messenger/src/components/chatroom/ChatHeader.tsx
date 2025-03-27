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
    <div className="flex w-full h-8 items-center justify-between bg-grey-100">
      <img src={BackBtn} className="w-auto h-[32px] p-2" onClick={() => navigate('/chatlist')} />
      <span className="w-[256px] px-[10px] py-1 text-label1 font-semibold" onClick={onClick}>
        {name}
      </span>
      <img src={SearchBtn} className="w-[32px] h-[32px] py-1" />
      <img src={MoreBtn} className="w-[32px] h-[32px] p-1" />
    </div>
  );
};
export default ChatHeader;
