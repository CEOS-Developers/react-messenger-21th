import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/utils/getCurrentUser';

const ProfileSection = () => {
  const navigate = useNavigate();
  const myProfile = getCurrentUser();

  if (!myProfile || !myProfile.name) return null;

  const handleClick = () => {
    navigate('/profile', {
      state: {
        username: myProfile.name,
        profileImg: myProfile.profileImg,
        backgroundImg: myProfile.backgroundImg,
        comment: myProfile.comment,
        isMine: true,
      },
    });
  };

  return (
    <div onClick={handleClick} className="flex w-full h-[108px] p-4 bg-grey-50 cursor-pointer">
      <img src={myProfile.profileImg} alt="프로필" className="w-[80px] h-[80px] rounded-full object-cover" />
      <div className="flex flex-col w-full justify-center">
        <span className="head-1 px-4 py-1">{myProfile.name}</span>
        <span className="caption-2 text-grey-500 px-4 py-1">{myProfile.comment}</span>
      </div>
    </div>
  );
};

export default ProfileSection;
