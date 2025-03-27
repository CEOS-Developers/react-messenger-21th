import styled from "styled-components";
import defaulImg from "/image/defaultImg.svg";

const TextContainer = styled.div<{ user: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.user ? "flex-end" : "flex-start")};
  align-items: flex-end;
  gap: 2px;
`;
const DateContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const DateDetail = styled.div`
  width: 102px;
  height: 26px;
  background: #0000000a;
  color: #767676;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin-top: 20px;
  radius: 100px;
`;
const TextContents = styled.div<{ user: boolean }>`
  background: ${(props) => (props.user ? "#CFD2FE" : "#fff")};
  width: fit-content;
  max-width: 240px;
  padding: 8px;
  margin-top: 8px;
  border-radius: ${(props) =>
    props.user ? "16px 16px 0px 16px" : "16px 16px 16px 0px"};
  font-size: 14px;
  font-weight: 400;
`;
const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  max-height: 70%;
  overflow-y: auto;
`;
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
  cursor: pointer;
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
const ProfileImg = styled.div<{ src?: string }>`
  width: 28px;
  height: 28px;
  background: url(${(props) => (props.src ? props.src : defaulImg)});
  background-size: cover;
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
  font-weight: 600;
  margin-left: 4px;
  cursor: pointer;
`;
const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  background: #fff;
  height: 44px;
  padding: 8px 16px;
`;
const Time = styled.span<{ user: boolean }>`
  padding: 2px;
  font-size: 12px;
  color: #a4a8af;
  margin-top: 4px;
  width: fit-content;
`;

export {
  ChatInputContainer,
  ChatInput,
  ChatContents,
  TextContainer,
  DateContainer,
  DateDetail,
  TextContents,
  InputContainer,
  FrontIcon,
  BackIcons,
  InputIcon,
  RoomContainer,
  FrontItem,
  Arrow,
  ProfileImg,
  Status,
  UserName,
  HeaderBar,
  Time,
};
