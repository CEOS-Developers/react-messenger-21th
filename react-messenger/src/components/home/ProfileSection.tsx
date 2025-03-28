import { useNavigate } from 'react-router-dom';
import ProfileImg from '@/assets/svgs/home/ProfileImg.svg?url';
import BackgroundImg from '@/assets/svgs/profile/Background.svg?url';

const ProfileSection = () => {
  const navigate = useNavigate();
  const comment = '아샷추가 정말 좋아요';

  const handleClick = () => {
    navigate('/profile', {
      state: {
        username: '전지연',
        profileImg: ProfileImg,
        backgroundImg: BackgroundImg,
        comment,
        isMine: true,
      },
    });
  };

  return (
    <div onClick={handleClick} className="flex w-full h-[108px] p-4 bg-grey-50 cursor-pointer">
      <img src={ProfileImg} alt="프로필" className="w-[80px] h-[80px] rounded-full object-cover" />
      <div className="flex flex-col w-full justify-center">
        <span className="text-head1 font-semibold px-4 py-1">전지연</span>
        <span className="text-caption2 font-normal text-grey-500 px-4 py-1">{comment}</span>
      </div>
    </div>
  );
};

export default ProfileSection;
