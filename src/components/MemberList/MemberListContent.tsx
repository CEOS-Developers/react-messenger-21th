import * as s from './MemberListContent.Styled'

const MemberListContent = () => {
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
            <div>프로필필</div>
            <s.MemberName>이채현</s.MemberName>
            <s.MeTag $isM={true}>나</s.MeTag>
          </s.MemberItem>
          <s.MemberItem>
            <div>프로필필</div>
            <s.MemberName>이채현</s.MemberName>
            <s.MeTag $isM={true}>나</s.MeTag>
          </s.MemberItem>
          <s.MemberItem>
            <div>프로필필</div>
            <s.MemberName>이채현</s.MemberName>
            <s.MeTag $isM={true}>나</s.MeTag>
          </s.MemberItem>
          <s.MemberItem>
            <div>프로필필</div>
            <s.MemberName>이채현</s.MemberName>
            <s.MeTag $isM={true}>나</s.MeTag>
          </s.MemberItem>
          <s.MemberItem>
            <div>프로필필</div>
            <s.MemberName>이채현</s.MemberName>
            <s.MeTag $isM={true}>나</s.MeTag>
          </s.MemberItem>
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
