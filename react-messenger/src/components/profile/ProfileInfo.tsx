type Props = {
  username: string;
  profileImg: string;
  comment: string;
};

const ProfileInfo = ({ username, profileImg, comment }: Props) => {
  return (
    <div className="z-10 flex flex-col items-center px-4 py-2">
      <img src={profileImg} alt="프로필 이미지" className="w-[108px] h-[108px] rounded-full object-cover mb-1" />
      <span className="text-head0 text-grey-50 font-semibold">{username}</span>
      <span className="text-caption1 text-grey-400 font-medium">{comment}</span>
    </div>
  );
};

export default ProfileInfo;
