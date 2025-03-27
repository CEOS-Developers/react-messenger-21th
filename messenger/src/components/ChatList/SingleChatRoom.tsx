import ProfileIcon from '../../assets/profile.svg?react';

const SingleChatRoom = () => {
  return (
    <div className="grid w-full grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-2 border-b border-b-gray-100 px-5 py-3">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3">
        <ProfileIcon className="h-full w-full" />
      </div>
      <span className="col-start-2 col-end-3 row-start-1 row-end-2 overflow-hidden font-semibold text-ellipsis whitespace-nowrap text-black">
        이오스
      </span>
      <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col self-stretch overflow-hidden text-xs leading-[140%] font-medium tracking-[0.06px]">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-300">
          텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
          텍스트 텍스트 텍스트 텍스트
        </span>
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-200">
          텍스트 텍스트 텍스트 텍스트 텍스트 텍스트
        </span>
      </div>
      <span className="col-start-3 col-end-4 row-start-1 row-end-2 overflow-hidden text-right text-xs leading-[140%] font-normal tracking-[0.06px] text-ellipsis whitespace-nowrap text-gray-200">
        3월 12일
      </span>
      <div className="bg-red col-start-3 col-end-4 row-start-2 row-end-3 flex h-[18px] min-w-[18px] shrink-0 flex-col items-center justify-center gap-2.5 self-start justify-self-end rounded-md px-1.5 py-0 text-xs font-normal text-white">
        5
      </div>
    </div>
  );
};
export default SingleChatRoom;
