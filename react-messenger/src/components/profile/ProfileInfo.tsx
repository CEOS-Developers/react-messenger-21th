import clsx from 'clsx';

type Props = {
  username: string;
  profileImg: string;
  comment: string;
  isCalling: boolean;
};

const ProfileInfo = ({ username, profileImg, comment, isCalling }: Props) => {
  return (
    <div className={clsx('z-10 flex flex-col items-center px-4 py-2', isCalling ? 'mt-[70px]' : 'mt-0')}>
      <img
        src={profileImg}
        alt="프로필 이미지"
        className={clsx(
          'rounded-full object-cover mb-1 transition-all duration-500 ease-in-out',
          isCalling ? 'w-[164px] h-[164px]' : 'w-[108px] h-[108px]',
        )}
      />
      <span className="head-0 text-grey-50">{username}</span>
      <span className={clsx('caption-1 text-grey-400', isCalling ? 'hidden' : 'flex')}>{comment}</span>
    </div>
  );
};

export default ProfileInfo;
