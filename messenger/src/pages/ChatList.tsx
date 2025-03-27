import NavBar from '../components/NavBar';
import AppBar from '../components/AppBar';
import Search from '../components/ChatList/Search';
import SingleChatRoom from '../components/ChatList/SingleChatRoom';

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
      <section className="mt-4 flex flex-col items-center gap-1 self-stretch">
        <Search />
        <article className="flex flex-col items-start self-stretch">
          <SingleChatRoom />
          <SingleChatRoom />
        </article>
      </section>

      <NavBar />
    </>
  );
};
export default ChatList;
