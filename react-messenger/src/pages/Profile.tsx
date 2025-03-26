import { useLocation, useNavigate } from 'react-router-dom';
import CloseBtn from '@/assets/svgs/profile/CloseBtn.svg';
import SettingBtn from '@/assets/svgs/profile/SettingBtn.svg';
import ChatMySelfBtn from '@/assets/svgs/profile/ChatMySelfBtn.svg';
import EditBtn from '@/assets/svgs/profile/EditBtn.svg';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, profileImg, backgroundImg, comment } = location.state || {};
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center justify-end relative">
        <div className="z-10 w-full flex justify-between items-center p-4 absolute top-0">
          <img src={CloseBtn} onClick={() => navigate(-1)} className="w-[16px] h-[16px] flex items-center" />
          <img src={SettingBtn} className="w-[24px] h-[24px]" />
        </div>
        <img src={backgroundImg} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="배경" />
        <div className="w-full z-10 flex flex-col items-center px-4 py-2">
          <img src={profileImg} alt="프로필" className="w-[108px] h-[108px] rounded-full object-cover mb-1" />
          <span className="text-head0 text-grey-50 font-semibold">{username}</span>
          <span className="text-caption1 text-grey-400 font-medium">{comment}</span>
        </div>
        <div className="w-full h-[156px] z-10 flex px-4 py-5 justify-center items-start gap-10">
          <div className="flex flex-col items-center gap-3 w-[60px] h-auto">
            <img src={ChatMySelfBtn} className="w-[24px] h-[24px]" />
            <span className="text-caption2 text-grey-50">나와의 채팅</span>
          </div>
          <div className="flex flex-col items-center gap-3 w-[60px] h-auto">
            <img src={EditBtn} className="w-[24px] h-[24px]" />
            <span className="text-caption2 text-grey-50">프로필 편집</span>
          </div>
          <div className="flex flex-col items-center gap-3  w-[60px] h-auto">
            <img src={SettingBtn} className="w-[24px] h-[24px]" />
            <span className="text-caption2 text-grey-50">설정</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
