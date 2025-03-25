import styled from "styled-components";
import arrowLeft from "/image/arrowLeft.svg";
import { Link } from "react-router-dom";
import add from "/image/add.svg";
import emo from "/image/emo.svg";
import fileInput from "/image/fileInput.svg";

const ChatRoomPage = () => {
  return (
    <>
      <RoomContainer>
        <HeaderBar>
          <FrontItem>
            <Link to="/chat">
              <Arrow src={arrowLeft} />
            </Link>
            <ProfileImg>
              <Status />
            </ProfileImg>
            <UserName>김상곤</UserName>
          </FrontItem>
        </HeaderBar>
        <ChatInputContainer>
          <InputContainer>
            <FrontIcon>
              <InputIcon src={add} />
              <ChatInput placeholder="메시지 보내기" />
            </FrontIcon>
            <BackIcons>
              <InputIcon src={emo} />
              <InputIcon src={fileInput} />
            </BackIcons>
          </InputContainer>
        </ChatInputContainer>
      </RoomContainer>
    </>
  );
};
export default ChatRoomPage;
const ChatInput = styled.input`
  border: none;
  width: 212px;
  height: 100%;
  font-size: 16px;
  background: #fff;
  color: #111111;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #a4a8af;
  }
`;
const FrontIcon = styled.div`
  z-index: 4;
  display: flex;
  align-items: center;
`;
const BackIcons = styled.div`
  z-index: 4;
  display: flex;
  gap: 8px;
`;
const InputIcon = styled.img`
  z-index: 1;
`;
const ChatInputContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 100px;
  height: 76px;
  padding: 16px;
  width: 100%;
`;
const InputContainer = styled.div`
  position: absolute;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
  background: #fff;
  width: 343px;
  height: 44px;
  border: none;
  gap: 12px;
`;
const RoomContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #eef1fa;
`;
const FrontItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const Arrow = styled.img``;
const ProfileImg = styled.div`
  width: 28px;
  height: 28px;
  background: #c4c4c4;
  position: relative;
  border-radius: 100px;
`;
const Status = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border: 2px solid #fff;
  width: 10px;
  height: 10px;
  border-radius: 100px;
  background: green;
`;
const UserName = styled.div`
  font-size: 16px;
  weight: 600;
  margin-left: 4px;
`;
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 44px;
  padding: 8px 16px;
`;
