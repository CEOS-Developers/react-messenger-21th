import { useOutletContext, useParams, useSearchParams, useLocation } from 'react-router-dom';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileInfo from '@/components/profile/ProfileInfo';
import ProfileActionBar from '@/components/profile/ProfileActionBar';
import users from '@/data/users.json';
import messages from '@/data/messages.json';
import { getCurrentUser } from '@/utils/getCurrentUser';
import { MessageItem } from '@/type/message';

const useCallContext = () =>
  useOutletContext<{ isCalling: boolean; setIsCalling: React.Dispatch<React.SetStateAction<boolean>> }>();

const findUser = (id: number, type: string | null, myProfile: any) => {
  if (type === 'user') {
    if (id === myProfile.id) return { user: myProfile, isMine: true };
    const user = [...(users.newFriends || []), ...(users.friends || [])].find((u) => u.id === id);
    return { user, isMine: false };
  }
  if (type === 'group') {
    const group = (users.groups || []).find((g) => g.id === id);
    return { user: group, isMine: false };
  }
  return { user: null, isMine: false };
};

const Profile = () => {
  const { isCalling, setIsCalling } = useCallContext();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const location = useLocation();
  const myProfile = getCurrentUser();

  const isMyPage = !id && !type && location.state?.isMine;
  const userId = id ? Number(id) : myProfile.id;

  const { user, isMine } = isMyPage
    ? { user: { ...myProfile, ...location.state }, isMine: true }
    : findUser(userId, type, myProfile);

  if (!user) return <div className="p-4">존재하지 않는 프로필입니다.</div>;

  const name = 'name' in user ? user.name : user.groupName;
  const chatId = (messages as any[]).find(
    (chat) =>
      chat.chatType === 'user' &&
      ((chat.targetUserId === user.id && chat.messages.some((m: MessageItem) => m.senderId === myProfile.id)) ||
        (chat.targetUserId === myProfile.id && chat.messages.some((m: MessageItem) => m.senderId === user.id))),
  )?.chatId;

  return (
    <div className="w-full h-full flex flex-col items-center justify-between relative">
      {!isCalling && <ProfileHeader />}
      <img
        src={user.backgroundImg}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        alt="배경 이미지"
      />
      <div className="flex flex-col w-full">
        <ProfileInfo username={name} profileImg={user.profileImg} comment={user.comment} isCalling={isCalling} />
        <ProfileActionBar
          isMine={isMine}
          isCalling={isCalling}
          setIsCalling={setIsCalling}
          targetUserId={user.id}
          targetUserName={name}
          targetProfileImg={user.profileImg}
          chatId={chatId}
        />
      </div>
    </div>
  );
};

export default Profile;
