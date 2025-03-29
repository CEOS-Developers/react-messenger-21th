import { useEffect } from 'react';

import NavBar from '../components/NavBar';
import AppBar from '../components/AppBar';
import Search from '../components/ChatList/Search';
import SingleChatRoom from '../components/ChatList/SingleChatRoom';

import { chatRoomData, users, chatMockList } from '../assets/data';

import BackArrowIcon from '../assets/back_arrow.svg?react';
import AddChatIcon from '../assets/add_chat_room.svg?react';
import ProfileIcon from '../assets/profile.svg?react';

const ChatList = () => {
  const user = users[0];

  useEffect(() => {
    //로컬에 저장된 현재 유저 아이디 가져오기
    // const savedUser = localStorage.getItem('current-user');
    // //로컬에 저장된 채팅 리스트 가져오기
    // if (savedUser) {
    //   const parsed = JSON.parse(savedUser);
    //   setUser(parsed);
    // } else {
    //   localStorage.setItem('current-user', JSON.stringify(user));
    // }
  }, []);

  //앱 초기 진입시 한번만 실행
  useEffect(() => {
    chatMockList.forEach((chatRoom) => {
      const key = `chat-room-${chatRoom.chatRoomId}`;
      const alreadyExists = localStorage.getItem(key);

      if (!alreadyExists) {
        localStorage.setItem(key, JSON.stringify(chatRoom.chat));
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('current-user', JSON.stringify(user));
  }, []);

  return (
    <div className="h-full w-full">
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
      <section className="mt-15 mb-21 flex flex-col items-center gap-1 self-stretch">
        <Search />
        <article className="flex flex-col items-start self-stretch">
          {chatRoomData.map((data) => (
            <SingleChatRoom
              key={data.roomId}
              roomName={data.roomName}
              participantsCount={data.participantsCount}
              prevMessage={data.prevMessage}
              lastMessageTime={data.lastMessageTime}
              unReadCount={data.unReadCount}
              roomId={data.roomId}
              currentUser={user.userId}
              participant={data.participant}
            />
          ))}
        </article>
      </section>

      <NavBar />
    </div>
  );
};
export default ChatList;
