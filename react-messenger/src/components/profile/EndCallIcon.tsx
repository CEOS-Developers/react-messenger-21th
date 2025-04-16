import CloseBtn from '@/assets/svgs/profile/CloseBtn.svg?url';

const EndCallIcon = () => {
  return (
    <div className="w-[58px] h-[58px] rounded-full bg-primary-0 flex items-center justify-center">
      <img src={CloseBtn} alt="종료" className="w-4 h-4" />
    </div>
  );
};

export default EndCallIcon;
