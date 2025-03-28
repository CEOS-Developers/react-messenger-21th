import ProfileIcon from '../../assets/profile.svg?react';
import { formatDate } from '../../utils/date';

interface SingleChatRoomProps {
  roomName: string;
  participantsCount: number;
  prevMessage: string[];
  lastMessageTime: string;
  unReadCount: number;
}

const SingleChatRoom = ({
  roomName,
  participantsCount,
  prevMessage,
  lastMessageTime,
  unReadCount,
}: SingleChatRoomProps) => {
  return (
    <div className="grid w-full grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-2 border-b border-b-gray-100 px-5 py-3">
      <div className="col-start-1 col-end-2 row-start-1 row-end-3">
        <ProfileIcon className="h-full w-full" />
      </div>
      <div className="col-start-2 col-end-3 row-start-1 row-end-2 flex gap-1">
        <span className="overflow-hidden font-semibold text-ellipsis whitespace-nowrap text-black">
          {roomName}
        </span>
        {participantsCount > 2 && (
          <span className="font-semibold text-gray-200">2</span>
        )}
      </div>

      <div className="col-start-2 col-end-3 row-start-2 row-end-3 flex flex-col self-stretch overflow-hidden text-xs leading-[140%] font-medium tracking-[0.06px]">
        {prevMessage.length > 0 && (
          <span className="overflow-hidden font-medium text-ellipsis whitespace-nowrap text-gray-300">
            {prevMessage[0]}
          </span>
        )}
        {prevMessage.length > 1 && (
          <span className="overflow-hidden font-normal text-ellipsis whitespace-nowrap text-gray-200">
            {prevMessage[1]}
          </span>
        )}
      </div>

      <span className="col-start-3 col-end-4 row-start-1 row-end-2 overflow-hidden text-right text-xs leading-[140%] font-normal tracking-[0.06px] text-ellipsis whitespace-nowrap text-gray-200">
        {formatDate(lastMessageTime)}
      </span>
      {unReadCount > 0 && (
        <div className="bg-red col-start-3 col-end-4 row-start-2 row-end-3 flex h-[18px] min-w-[18px] shrink-0 flex-col items-center justify-center gap-2.5 self-start justify-self-end rounded-md px-1.5 py-0 text-xs font-normal text-white">
          {unReadCount}
        </div>
      )}
    </div>
  );
};
export default SingleChatRoom;
