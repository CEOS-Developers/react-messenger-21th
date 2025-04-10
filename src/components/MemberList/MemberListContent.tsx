import * as s from './MemberListContent.Styled'
import Plus from '../../assets/Icons/List/plus.svg?react'
import { useUserStore } from '../../stores/useUserStore'
import { ProfileDefault } from '../../assets/Icons/Profile'
import { useChatRoomStore } from '../../stores/useChatRoomStore'
import { useParams } from 'react-router'
import { getMemberArray } from '../../utils/getMemberList'

const MemberListContent = () => {
  const { user } = useUserStore()
  const { chatRoom } = useChatRoomStore()
  const roomId = Number(useParams().id)
  const member = chatRoom?.find((room) => room.chatRoomId === roomId)?.member
  const memberIds = member?.filter((memberId: number) => memberId !== user.id)

  const memberData =
    memberIds &&
    getMemberArray(memberIds).sort((a, b) =>
      a.name.localeCompare(b.name, 'ko-KR')
    )

  return (
    <s.Wrapper>
      <s.Section>
        <div>아이콘모음</div>
        <s.RoomName>제목</s.RoomName>
      </s.Section>
      <s.Section>
        <s.MemberNum>멤버 6</s.MemberNum>
        <s.MemberList>
          <s.MemberItem>
            <Plus />
            <s.MemberName>친구 초대하기</s.MemberName>
          </s.MemberItem>
          <s.MemberItem key={user.id}>
            <ProfileDefault color={user.profileColor} />
            <s.MemberName>{user.name}</s.MemberName>
            <s.MeTag $isM={true}>나</s.MeTag>
          </s.MemberItem>
          {memberData?.map((member) => (
            <s.MemberItem key={member.id}>
              <ProfileDefault color={member.profileColor} />
              <s.MemberName>{member.name}</s.MemberName>
            </s.MemberItem>
          ))}
        </s.MemberList>
      </s.Section>

      <s.Section>
        <s.Button $isM={true}>유저 변경하기</s.Button>
        <s.OutButton $isM={true}>채팅방 나가기</s.OutButton>
      </s.Section>
    </s.Wrapper>
  )
}

export default MemberListContent
