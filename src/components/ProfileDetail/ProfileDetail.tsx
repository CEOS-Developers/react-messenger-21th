import { JSX } from 'react/jsx-runtime';
import { useNavigate } from 'react-router';

import * as C from '@/constants/Profile';
import { MY_USER_INFO } from '@/constants/Chat';

import { UserProfile } from '@/schemas/userProfile';

import * as I from '@/icons/Profile';
import ProfileImageBox from '../ProfileImageBox/ProfileImageBox';

import { useProfileOpen } from '@/stores/useProfileOpen';
import { useTabBarOption } from '@/stores/useTabBarOption';
import { useChatPreviewList } from '@/stores/useChatPreviewList';

import { generateChatRoomId } from '@/utils/generateRoomId';

import * as S from './ProfileDetail.styled';

type ProfileDetailProps = {
  userProfile: UserProfile;
};

const ProfileDetail = ({ userProfile }: ProfileDetailProps): JSX.Element => {
  const navigate = useNavigate();

  const { closeProfile } = useProfileOpen();
  const { setSelectedTab } = useTabBarOption();
  const { setInitalChatPreview } = useChatPreviewList();

  const handlePersonalChatClick = () => {
    // 내 userId와 상대방 userId를 사용해 개인 채팅방 생성
    const myUserId = MY_USER_INFO.userId;
    const targetUserId = userProfile.userId;

    if (!targetUserId) {
      console.error('상대방의 userId가 없습니다.');
      return;
    }

    const roomId = generateChatRoomId(myUserId, targetUserId);

    // 프로필 상세보기 닫은 후 채팅방으로 이동
    closeProfile();

    // 채팅방 MetaData 전역 상태 변경
    setInitalChatPreview({
      roomId: roomId,
      roomName: userProfile.username,
      isGroup: false, // 1:1 채팅방이므로 false
      participants: [
        {
          userId: MY_USER_INFO.userId,
          username: MY_USER_INFO.username,
          profileImage: MY_USER_INFO.profileImage,
        },
        {
          userId: targetUserId,
          username: userProfile.username,
          profileImage: userProfile.profileImage,
        },
      ],
      lastMessage: {
        messageId: '',
        senderId: '',
        senderName: '',
        content: '',
        type: 'text',
        sentAt: '',
      },
      unreadCount: 0,
    });

    // 0.3초 후에 채팅방으로 이동
    setTimeout(() => {
      navigate(`chat/room-${roomId}`);

      // selectedTab 상태 업데이트 (리팩토링 필요!)
      setSelectedTab('채팅');
      sessionStorage.setItem('selectedTab', '채팅');
    }, 300);
  };

  return (
    <S.ProfileDetailContainer
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
    >
      <S.ProfileDetailHeaderSection>
        <S.ProfileDetailOptionButton onClick={closeProfile}>
          <I.CancelIcon />
        </S.ProfileDetailOptionButton>
        <S.ProfileDetailSubOptionList>
          {C.PROFILE_DETAIL_SUB_OPTION_LIST.map((option) => (
            <S.ProfileDetailOptionItem key={option.id}>
              <S.ProfileDetailOptionButton>
                <option.icon />
              </S.ProfileDetailOptionButton>
            </S.ProfileDetailOptionItem>
          ))}
        </S.ProfileDetailSubOptionList>
      </S.ProfileDetailHeaderSection>

      <S.ProfileDetailMainSection>
        <ProfileImageBox
          size={C.PROFILE_SIZE_LIST.detail}
          username={userProfile.username}
        />
        <S.ProfileUsername>{userProfile.username}</S.ProfileUsername>
        <S.ProfileDetailMainOptionSection>
          <S.ProfileDetailMainOptionList>
            <S.ProfileDetailOptionItem>
              <S.ProfileDetailOptionLink onClick={handlePersonalChatClick}>
                <I.ChatIcon />
                1:1 채팅
              </S.ProfileDetailOptionLink>
            </S.ProfileDetailOptionItem>

            <S.ProfileDetailOptionItem>
              <S.ProfileDetailOptionLink
                href={userProfile.snsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <I.LinkIcon />
                SNS 링크
              </S.ProfileDetailOptionLink>
            </S.ProfileDetailOptionItem>

            <S.ProfileDetailOptionItem>
              <S.ProfileDetailOptionLink>
                <I.SettingIconMain />
                설정
              </S.ProfileDetailOptionLink>
            </S.ProfileDetailOptionItem>
          </S.ProfileDetailMainOptionList>
        </S.ProfileDetailMainOptionSection>
      </S.ProfileDetailMainSection>
    </S.ProfileDetailContainer>
  );
};

export default ProfileDetail;
