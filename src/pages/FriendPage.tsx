import styled from "styled-components";
import manage from "/image/manage.svg";
import search from "/image/search.svg";
import addFriend from "/image/addFriend.svg";
import Profile from "../components/Profile";

const FriendPage = () => {
  const friendList = ["송하윤", "배성일", "박재영"];
  return (
    <>
      <FriendPageHeader>
        <Title>
          친구
          <SubNav>
            <img src={manage} />
            <img src={search} />
            <img src={addFriend} />
          </SubNav>
        </Title>
      </FriendPageHeader>
      <Profile name="김민수" type="me" />
      <Divider>ChatGPT에게 물어보기</Divider>
      <AIChat>
        <Profile name="AI 챗으로 해결해보세요!" type="AI" />
      </AIChat>
      <Divider>새로운 친구</Divider>
      <Profile name="새로운 친구를 찾아보세요" type="AI" />
      <Divider>접속 중인 친구</Divider>
      {friendList.map((friend) => (
        <Profile name={friend} type="friend" />
      ))}
    </>
  );
};
export default FriendPage;
const AIChat = styled.div`
  height: 58px;
  background: #dfe3f8;
`;
const FriendPageHeader = styled.div`
  padding: 0px 16px;
`;
const Divider = styled.div`
  height: 30px;
  padding: 6px 16px;
  font-size: 12px;
  color: #676773;
  background: #f5f7fa;
`;
export const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
`;
const SubNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  height: 48px;
`;
