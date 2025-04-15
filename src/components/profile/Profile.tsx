import { useParams } from 'react-router-dom';
import * as S from './Profile.Styled';
import { useMyId, useUserList } from '@/contexts/localStorage';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileFeature from './ProfileFeature/ProfileFeature';

function Profile() {
  const { userId } = useParams();
  const { myId } = useMyId();
  const { userList, onToggleFavorite } = useUserList();

  if (!userId || !userList[userId]) return <></>;

  const user = userList[userId];
  const isMine = userId === myId;

  const bgClass = isMine
    ? 'bg-[linear-gradient(var(--color-black-tp-03),var(--color-black-tp-03)),linear-gradient(to_bottom,var(--color-gradient-01-from),var(--color-gradient-01-via),var(--color-gradient-01-to))]'
    : 'bg-[linear-gradient(var(--color-black-tp-03),var(--color-black-tp-03)),linear-gradient(to_bottom,var(--color-gradient-02-from),var(--color-gradient-02-via),var(--color-gradient-02-to))]';

  return (
    <S.ProfileWrapper className={bgClass}>
      <ProfileHeader userId={userId} user={user} isMine={isMine} onToggleFavorite={onToggleFavorite} />
      <ProfileFeature user={user} isMine={isMine} />
    </S.ProfileWrapper>
  );
}

export default Profile;
