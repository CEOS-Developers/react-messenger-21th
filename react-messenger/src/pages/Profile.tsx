import { useLocation } from 'react-router-dom';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileActionBar from '@/components/profile/ProfileActionBar';

const Profile = () => {
  const location = useLocation();
  const { username, profileImg, backgroundImg, comment, isMine } = location.state || {};

  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative">
      <ProfileHeader />

      {/* 배경 이미지 */}
      <img src={backgroundImg} className="absolute top-0 left-0 w-full h-full object-cover z-0" alt="배경 이미지" />

      <div className="flex flex-col">
        <ProfileInfo username={username} profileImg={profileImg} comment={comment} />
        <ProfileActionBar isMine={isMine} />
      </div>
    </div>
  );
};

export default Profile;
