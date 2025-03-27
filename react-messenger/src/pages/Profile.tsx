import { useLocation, useNavigate } from 'react-router-dom';
import CloseBtn from '@/assets/svgs/profile/CloseBtn.svg?url';
import SettingBtn from '@/assets/svgs/profile/SettingBtn.svg?url';
import ChatMySelfBtn from '@/assets/svgs/profile/ChatMySelfBtn.svg?url';
import EditBtn from '@/assets/svgs/profile/EditBtn.svg?url';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, profileImg, backgroundImg, comment } = location.state || {};

  const actionItems = [
    {
      icon: ChatMySelfBtn,
      label: '나와의 채팅',
      onClick: () => {},
    },
    {
      icon: EditBtn,
      label: '프로필 편집',
      onClick: () => {},
    },
    {
      icon: SettingBtn,
      label: '설정',
      onClick: () => {},
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col items-center justify-end relative">
      {/* 상단 버튼 */}
      <div className="absolute top-0 left-0 z-10 w-full flex justify-between items-center p-4">
        <img src={CloseBtn} onClick={() => navigate(-1)} className="cursor-pointer w-[16px] h-[16px]" alt="닫기" />
        <img src={SettingBtn} className="cursor-pointer w-[24px] h-[24px]" alt="설정" />
      </div>

      {/* 배경 이미지 */}
      <img src={backgroundImg} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="배경 이미지" />

      {/* 프로필 정보 */}
      <div className="z-10 flex flex-col items-center px-4 py-2">
        <img src={profileImg} alt="프로필 이미지" className="w-[108px] h-[108px] rounded-full object-cover mb-1" />
        <span className="text-head0 text-grey-50 font-semibold">{username}</span>
        <span className="text-caption1 text-grey-400 font-medium">{comment}</span>
      </div>

      {/* 하단 액션 버튼 */}
      <div className="w-full h-[156px] z-10 flex justify-center items-start gap-10 px-4 py-5">
        {actionItems.map(({ icon, label, onClick }, idx) => (
          <button key={idx} onClick={onClick} className="flex flex-col items-center gap-3 w-[60px]">
            <img src={icon} alt={label} className="w-[24px] h-[24px]" />
            <span className="text-caption2 text-grey-50">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Profile;
