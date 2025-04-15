type ChatUserProps = {
  profileImg: string;
  username: string;
  lastMessage: string;
  time: string;
  unread?: number;
  memberCount?: number;
  onClick?: () => void;
};

const ChatUser = ({ profileImg, username, lastMessage, time, unread, memberCount, onClick }: ChatUserProps) => {
  return (
    <div className="flex items-center px-4 py-2 relative cursor-pointer" onClick={onClick}>
      <img
        src={profileImg}
        className="w-[60px] h-[60px] mx-[3.5px] rounded-full object-cover mr-[3.5px]"
        alt={username}
      />

      <div className="flex flex-col justify-center w-[254px]">
        <span className="title-2 px-4 py-1 text-grey-900 h-[33px]">
          {username}
          {memberCount && <span className="title-2 text-grey-600">&nbsp;({memberCount})</span>}
        </span>
        <div className="flex gap-1 px-4 pb-1 pt-[2.4px] h-[27px]">
          <span className="body-2 text-grey-400 truncate max-w-[170px] overflow-hidden whitespace-nowrap">
            {lastMessage}
          </span>
          <span className="body-2 text-grey-400 shrink-0">· {time}</span>
        </div>
      </div>

      {typeof unread === 'number' && unread > 0 && (
        <div className="flex items-center justify-center ml-auto caption-2 text-grey-50 bg-primary-0 rounded-full w-[20px] h-[20px] text-center">
          {unread}
        </div>
      )}
    </div>
  );
};

export default ChatUser;
