import {
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
} from "../styles/ChatRoomPage/ChatRoomStyle";
import arrowLeft from "/image/arrowLeft.svg";
import { Link } from "react-router-dom";
import add from "/image/add.svg";
import emo from "/image/emo.svg";
import inputBar from "/image/inputBar.svg";
import fileInput from "/image/fileInput.svg";
import { chatRoomAtom, userAtom, usersAtom } from "../store/message";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

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
            <ProfileImg src={chatRoom?.users[1].profileImg}>
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
