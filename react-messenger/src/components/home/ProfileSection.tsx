import ProfileImg from '@/assets/svgs/home/ProfileImg.svg';

const ProfileSection = () => {
  return (
    <div className="flex w-full h-[108px] p-4">
      <img src={ProfileImg} alt="프로필" className="w-[80px] h-[80px] rounded-full object-cover" />
      <div className="flex flex-col w-full justify-center">
        <span className="text-head1 font-semibold px-4 py-1">전지연</span>
        <span className="text-caption2 font-normal text-grey-500 px-4 py-1">아샷추가 정말 좋아요</span>
      </div>
    </div>
  );
};

export default ProfileSection;
