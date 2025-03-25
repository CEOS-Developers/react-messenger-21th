import { Link } from "react-router-dom";
import styled from "styled-components";

const ChatContents = () => {
  return (
    <>
      <Link to="/chatRoom">
        <ChatContainer>
          <InfoContainer>
            <UserImg />
            <ChatInfo>
              <UserName>김상곤</UserName>
              <ChatPreview>
                수업좀 들어라 아니 근데 진짜 하기 너무 싫고 알골 이란게 나랑
                그렇게 맞는 것 같지도 않고 더ㅗㅠㄴ오류너ㅗㅠ
              </ChatPreview>
            </ChatInfo>
          </InfoContainer>
          <DetailInfo>
            <Date>오전 9:30</Date>
            <ChatCount>2</ChatCount>
          </DetailInfo>
        </ChatContainer>
      </Link>
    </>
  );
};
export default ChatContents;
const ChatCount = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100px;
  position: absolute;
  bottom: 3px;
  right: 0px;
  font-size: 12px;
  color: white;
  background: #6e1ce1;
  text-align: center;
`;
const DetailInfo = styled.div`
  position: relative;
`;
const Date = styled.div`
  color: #a4a8af;
  font-size: 12px;
`;
const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
`;
const ChatContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const UserImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: #dfe3f8;
`;
const ChatInfo = styled.div``;
const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #111111;
  height: 20px;
  margin-bottom: 2px;
`;
const ChatPreview = styled.div`
  font-size: 12px;
  font-weight: 400;
  width: 200px;
  color: #7d828d;
  line-height: 18px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
