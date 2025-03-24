import styled from "styled-components";
import manage from "/image/manage.svg";
import search from "/image/search.svg";
import addFriend from "/image/addFriend.svg";

const FriendPage = () => {
  return (
    <Title>
      친구
      <SubNav>
        <img src={manage} />
        <img src={search} />
        <img src={addFriend} />
      </SubNav>
    </Title>
  );
};
export default FriendPage;
const Title = styled.div`
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
