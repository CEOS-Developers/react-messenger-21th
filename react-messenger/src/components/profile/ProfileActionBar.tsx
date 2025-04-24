import ChatMySelfBtn from '@/assets/svgs/profile/ChatMySelfBtn.svg?url';
import EditBtn from '@/assets/svgs/profile/EditBtn.svg?url';
import SettingBtn from '@/assets/svgs/profile/SettingBtn.svg?url';
import Call from '@/assets/svgs/profile/Call.svg?url';
import VideoCall from '@/assets/svgs/profile/VideoCall.svg?url';
import Chat from '@/assets/svgs/profile/WhiteChat.svg?url';
import Mute from '@/assets/svgs/profile/Mute.svg?url';
import Speaker from '@/assets/svgs/profile/Speaker.svg?url';
import EndCallIcon from './EndCallIcon';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';

type ActionBarProps = {
  isMine: boolean;
  isCalling: boolean;
  setIsCalling: React.Dispatch<React.SetStateAction<boolean>>;
  targetUserId: number;
  targetUserName: string;
  targetProfileImg: string;
  chatId: number;
  chatType: 'user' | 'group';
};
const ProfileActionBar = ({
  isMine,
  isCalling,
  setIsCalling,
  targetUserId,
  targetUserName,
  targetProfileImg,
  chatId,
  chatType,
}: ActionBarProps) => {
  const navigate = useNavigate();

  const getActions = () => {
    if (isMine) {
      return [
        { icon: ChatMySelfBtn, label: '나와의 채팅', onClick: () => {} },
        { icon: EditBtn, label: '프로필 편집', onClick: () => {} },
        { icon: SettingBtn, label: '설정', onClick: () => {} },
      ];
    }

    if (isCalling) {
      return [
        { icon: Mute, label: '음소거', onClick: () => {} },
        {
          icon: <EndCallIcon />,
          label: '',
          onClick: () => setIsCalling(false),
        },
        { icon: Speaker, label: '스피커', onClick: () => {} },
      ];
    }

    return [
      {
        icon: Chat,
        label: '채팅',
        onClick: () =>
          navigate(`/chat/${chatId}`, {
            state: {
              name: targetUserName,
              profileImg: targetProfileImg,
              targetUserId,
              chatType,
              isSwitched: false,
            },
          }),
      },
      {
        icon: Call,
        label: '전화',
        onClick: () => setIsCalling(true),
      },
      { icon: VideoCall, label: '영상통화', onClick: () => {} },
    ];
  };

  const items = getActions();

  return (
    <div
      className={clsx(
        'w-full h-[156px] z-10 flex justify-center items-start py-5',
        isCalling ? 'gap-[60px] px-0 bottom-0 absolute' : 'gap-10 px-4 ',
      )}
    >
      {items.map(({ icon, label, onClick }, idx) => (
        <button key={idx} onClick={onClick} className="flex flex-col items-center gap-3 w-[60px] cursor-pointer">
          {typeof icon === 'string' ? (
            <img src={icon} alt={label} className="w-[24px] h-[24px]" />
          ) : (
            <div className="w-[58px] h-[58px]">{icon}</div>
          )}
          {label && <span className="caption-2 text-grey-50">{label}</span>}
        </button>
      ))}
    </div>
  );
};

export default ProfileActionBar;
