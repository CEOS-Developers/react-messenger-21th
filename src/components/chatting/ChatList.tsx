import Arrow from '@/assets/images/icon/Arrow.svg?react';
import TeamChat from '@/assets/images/profile/TeamChat.svg?react';
import Profile from '@/assets/images/profile/ProfileBig.svg?react';
import cn from '@/utils/cn';
import { useState } from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ChatListProps {
  group: string;
  setChatroomId: Dispatch<SetStateAction<number | null>>;
}

const ChatList: React.FC<ChatListProps> = ({ group, setChatroomId }) => {
  const [isListOpen, setIsListOpen] = useState(true);

  const handleClickList = () => {
    setIsListOpen((prev: boolean) => !prev);
  };

  const handleChatRoomClick = () => {
    setChatroomId(1);
  };

  return (
    <section className='flex flex-col px-4 py-2 gap-4'>
      <span className='flex justify-between'>
        <span className='font-cap-med text-neutral-500'>{group}</span>
        <Arrow
          className={cn('w-4 h-4 text-neutral-500 cursor-pointer rotate-90', {
            'rotate-270': isListOpen,
          })}
          onClick={handleClickList}
        />
      </span>
      {isListOpen && (
        <ul className='flex flex-col gap-3 font-body-2-med text-neutral-700'>
          <li
            className='flex gap-3 text-center items-center cursor-pointer'
            onClick={handleChatRoomClick}
          >
            <TeamChat />
            <span className='flex-1 flex flex-col gap-1 text-start overflow-x-hidden'>
              <div className='font-body-2-sb text-neutral-800'>
                CEOS 21기 공지방
              </div>
              <div className='font-body-2-med text-neutral-500 truncate'>
                [2주차 세션 공지] 2주차 세션은 비대면으로 진행됩니다.
              </div>
            </span>
            <span className='font-cap-med text-neutral-300'>AM 10 : 30</span>
          </li>
          <li className='flex gap-3 text-center items-center cursor-pointer'>
            <TeamChat />
            <span className='flex-1 flex flex-col gap-1 text-start overflow-x-hidden'>
              <div className='font-body-2-sb text-neutral-800'>
                CEOS 21기 잡담방
              </div>
              <div className='font-body-2-med text-neutral-500 truncate'>
                4월 5일 영희와 철수에서 시사회를 개최합니다! 좋은 기회로
                사무실을 제공받아 시티뷰가 죽여주는 사무실에서 다같이 영화를
                관람하실 수 있습니다~ 가입하지 않으셔도 함께 즐길 수 있으니 많은
                참여 부탁드려요!
              </div>
            </span>
            <span className='font-cap-med text-neutral-300'>AM 10 : 30</span>
          </li>
          <li className='flex gap-3 text-center items-center cursor-pointer'>
            <Profile />
            <span className='flex-1 flex flex-col gap-1 text-start overflow-x-hidden'>
              <div className='font-body-2-sb text-neutral-800'>
                맛집 메이트 겸 다이어트 메이트
              </div>
              <div className='font-body-2-med text-neutral-500 truncate'>
                아니살뺄거라고이거만먹자고
              </div>
            </span>
            <span className='font-cap-med text-neutral-300'>AM 10 : 30</span>
          </li>
        </ul>
      )}
    </section>
  );
};

export default ChatList;
