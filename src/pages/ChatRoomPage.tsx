import styled from "styled-components";
import arrowLeft from "/image/arrowLeft.svg";
import { Link } from "react-router-dom";
import add from "/image/add.svg";
import emo from "/image/emo.svg";
import inputBar from "/image/inputBar.svg";
import fileInput from "/image/fileInput.svg";
import { chatMessagesAtom, userAtom, usersAtom } from "../store/message";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";

const ChatRoomPage = () => {
  const [messages, setMessages] = useAtom(chatMessagesAtom);
  const [input, setInput] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [user, setUser] = useAtom(userAtom);
  const [users] = useAtom(usersAtom);

  const addMessage = () => {
    setMessages([
      ...messages,
      {
        [new Date().toISOString().split("T")[0]]: {
          id: Date.now(),
          user: user,
          text: input,
          time: `${new Date().getHours()}시 ${new Date().getMinutes()}분`,
        },
      },
    ]);
    setInput("");
    setIsMessage(false);
    console.log(messages);
  };
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.isComposing) return;
    if (e.key === "Enter") {
      e.preventDefault();
      addMessage();
    }
  };
  const changeUser = () => {
    setUser(users[1]);
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (input.length > 0) {
      setIsMessage(true);
    } else {
      setIsMessage(false);
    }
  }, [input]);
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
            <UserName onClick={changeUser}>김상곤</UserName>
          </FrontItem>
        </HeaderBar>
        <ChatContents>
          {messages.map((date) => (
            <>
              {Object.keys(date).map((key) => (
                <>
                  <DateDetail>{key}</DateDetail>
                  {date[key].map((message) => (
                    <>
                      <TextContents user={message.user.id === user.id}>
                        {message.text}
                      </TextContents>
                    </>
                  ))}
                </>
              ))}
            </>
          ))}
        </ChatContents>
        <ChatInputContainer>
          <InputContainer>
            <FrontIcon>
              <InputIcon src={add} />
              <ChatInput
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="메시지 보내기"
              />
            </FrontIcon>
            <BackIcons>
              <InputIcon src={emo} />
              {isMessage ? (
                <>
                  {" "}
                  <InputIcon src={inputBar} onClick={addMessage} />
                </>
              ) : (
                <>
                  <InputIcon src={fileInput} />
                </>
              )}
            </BackIcons>
          </InputContainer>
        </ChatInputContainer>
      </RoomContainer>
    </>
  );
};
export default ChatRoomPage;
const DateDetail = styled.div`
  width: 102px;
  height: 26px;
  background: #0000000a;
  color: #767676;
  radius: 100px;
`;
const TextContents = styled.div<{ user: boolean }>`
  margin-left: ${(props) => (props.user ? "auto" : "0")};
  margin-right: ${(props) => (props.user ? "0" : "auto")};
  background: ${(props) => (props.user ? "#CFD2FE" : "#fff")};
  max-width: 240px;
  padding: 8px;
`;
const ChatContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0px 16px;
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
