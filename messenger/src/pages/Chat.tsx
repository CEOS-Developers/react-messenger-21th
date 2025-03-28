import AppBar from '../components/AppBar';
import ChatInput from '../components/Chat/ChatInput';

import BackArrowIcon from '../assets/back_arrow.svg?react';
import MenuIcon from '../assets/menu.svg?react';
const Chat = () => {
  return (
    <>
      <AppBar
        type="gradient"
        title="이름"
        subtitle="카페 이름"
        leftIcon={<BackArrowIcon />}
        rightIcon={
          <div
            className={`absolute top-1/2 right-0 flex shrink-0 -translate-x-1 -translate-y-1/2 items-center justify-between`}
          >
            <MenuIcon />
          </div>
        }
      />
      <ChatInput />
    </>
  );
};

export default Chat;
