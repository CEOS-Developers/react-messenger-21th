import styled from "styled-components";
import arrowLeft from "/image/arrowLeft.svg";
import { Link } from "react-router-dom";
import add from "/image/add.svg";
import emo from "/image/emo.svg";
import inputBar from "/image/inputBar.svg";
import fileInput from "/image/fileInput.svg";
import { chatRoomAtom, userAtom, usersAtom } from "../store/message";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import defaulImg from "/image/defaultImg.svg";

const ChatRoomPage = () => {
  const [chatRoom] = useAtom(chatRoomAtom);
  const [messages, setMessages] = useState(chatRoom?.messages || {});
  const today = new Date().toISOString().split("T")[0];
  const [input, setInput] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [user, setUser] = useAtom(userAtom);
  const [users] = useAtom(usersAtom);
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const addMessage = () => {
    setMessages((prev) => {
      const date = today;
      if (!prev[date]) {
        prev[date] = [];
      }
      const newMessage = {
        id: prev[date].length + 1,
        user: user,
        otherUser: user == users[0] ? users[1] : users[0],
        text: input,
        time: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      prev[date].push(newMessage);
      return { ...prev };
    });
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
    if (user.id === 1) {
      setUser(users[1]);
    }
    if (user.id === 2) {
      setUser(users[0]);
    }
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
            <UserName onClick={changeUser}>{chatRoom?.users[1].name}</UserName>
          </FrontItem>
        </HeaderBar>
        <ChatContents ref={containerRef}>
          {Object.entries(messages).map(([date, messagesByDate]) => (
            <div key={date}>
              <DateContainer>
                <DateDetail>
                  {new Date(date).getMonth() + 1}월 {new Date(date).getDate()}일{" "}
                  {days[new Date(date).getDay()]}요일
                </DateDetail>
              </DateContainer>
              {messagesByDate.map((message, index) => {
                const showTime =
                  index === messagesByDate.length - 1 ||
                  message.time !== messagesByDate[index + 1].time;
                return (
                  <>
                    <TextContainer user={message.user.id === user.id}>
                      {showTime && message.user.id === user.id && (
                        <Time user={message.user.id === user.id}>
                          {message.time}
                        </Time>
                      )}
                      <TextContents
                        key={message.id}
                        user={message.user.id === user.id}
                      >
                        {message.text}
                      </TextContents>
                      {showTime && message.user.id !== user.id && (
                        <Time user={message.user.id === user.id}>
                          {message.time}
                        </Time>
                      )}
                    </TextContainer>
                  </>
                );
              })}
            </div>
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
