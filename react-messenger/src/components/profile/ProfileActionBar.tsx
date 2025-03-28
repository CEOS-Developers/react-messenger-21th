import ChatMySelfBtn from '@/assets/svgs/profile/ChatMySelfBtn.svg?url';
import EditBtn from '@/assets/svgs/profile/EditBtn.svg?url';
import SettingBtn from '@/assets/svgs/profile/SettingBtn.svg?url';
import Call from '@/assets/svgs/profile/Call.svg?url';
import VideoCall from '@/assets/svgs/profile/VideoCall.svg?url';
import Chat from '@/assets/svgs/profile/WhiteChat.svg?url';

type Props = {
  isMine: boolean;
};

const ProfileActionBar = ({ isMine }: Props) => {
  const items = isMine
    ? [
        { icon: ChatMySelfBtn, label: '나와의 채팅', onClick: () => {} },
        { icon: EditBtn, label: '프로필 편집', onClick: () => {} },
        { icon: SettingBtn, label: '설정', onClick: () => {} },
      ]
    : [
        { icon: Chat, label: '채팅', onClick: () => {} },
        { icon: Call, label: '전화', onClick: () => {} },
        { icon: VideoCall, label: '영상통화', onClick: () => {} },
      ];

  return (
    <div className="w-full h-[156px] z-10 flex justify-center items-start gap-10 px-4 py-5">
      {items.map(({ icon, label, onClick }, idx) => (
        <button key={idx} onClick={onClick} className="flex flex-col items-center gap-3 w-[60px]">
          <img src={icon} alt={label} className="w-[24px] h-[24px]" />
          <span className="text-caption2 text-grey-50">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ProfileActionBar;
