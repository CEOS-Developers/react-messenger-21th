import { useNavigate } from 'react-router-dom';
import CloseBtn from '@/assets/svgs/profile/CloseBtn.svg?url';
import SettingBtn from '@/assets/svgs/profile/SettingBtn.svg?url';
import { useStatusBar } from '@/hooks/useStatusBar';

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { offsetClass } = useStatusBar();

  return (
    <div className={`w-full sticky ${offsetClass} z-10 bg-transparent`}>
      <div className="flex justify-between items-center p-4 h-[56px]">
        <img
          src={CloseBtn}
          onClick={() => navigate(-1)}
          className="cursor-pointer w-[24px] h-[24px] p-[4px]"
          alt="닫기"
        />
        <img src={SettingBtn} className="cursor-pointer w-[24px] h-[24px]" alt="설정" />
      </div>
    </div>
  );
};

export default ProfileHeader;
