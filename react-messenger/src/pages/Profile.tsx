import { useLocation, useNavigate } from 'react-router-dom';
import StatusBar from '@/components/statusbar/StatusBar';
import CloseBtn from '@/assets/svgs/profile/CloseBtn.svg?url';
import SettingBtn from '@/assets/svgs/profile/SettingBtn.svg?url';
import ProfileActionBar from '@/components/profile/ProfileActionBar';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, profileImg, backgroundImg, comment, isMine } = location.state || {};

  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative">
      {/* 상단 버튼 */}
      <div className="w-full sticky top-0 z-10 bg-transparent">
        <StatusBar />
        <div className="flex justify-between items-center p-4">
          <img src={CloseBtn} onClick={() => navigate(-1)} className="cursor-pointer w-[16px] h-[16px]" alt="닫기" />
          <img src={SettingBtn} className="cursor-pointer w-[24px] h-[24px]" alt="설정" />
        </div>
      </div>

      {/* 배경 이미지 */}
      <img src={backgroundImg} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="배경 이미지" />

      <div className="flex flex-col">
        {/* 프로필 정보 */}
        <div className="z-10 flex flex-col items-center px-4 py-2">
          <img src={profileImg} alt="프로필 이미지" className="w-[108px] h-[108px] rounded-full object-cover mb-1" />
          <span className="text-head0 text-grey-50 font-semibold">{username}</span>
          <span className="text-caption1 text-grey-400 font-medium">{comment}</span>
        </div>

        <ProfileActionBar isMine={isMine} />
      </div>
    </div>
  );
};

export default Profile;
