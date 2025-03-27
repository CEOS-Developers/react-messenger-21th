import NavBar from '../components/NavBar';
import AppBar from '../components/AppBar';

import BackArrowIcon from '../assets/back_arrow.svg?react';
import AddChatIcon from '../assets/add_chat_room.svg?react';
import ProfileIcon from '../assets/profile.svg?react';

const ChatList = () => {
  return (
    <>
      <AppBar
        type="white"
        title="채팅"
        leftIcon={<BackArrowIcon />}
        rightIcon={
          <div
            className={`absolute top-1/2 right-0 flex w-14 shrink-0 -translate-x-1 -translate-y-1/2 items-center justify-between`}
          >
            <AddChatIcon />
            <ProfileIcon />
          </div>
        }
      />

      <NavBar />
    </>
  );
};
export default ChatList;
