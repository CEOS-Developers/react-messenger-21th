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
import { chatRoomAtom, usersAtom } from "../store/message";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

const ChatRoomPage = () => {
  const [chatRoom] = useAtom(chatRoomAtom);
  const [messages, setMessages] = useState(chatRoom?.messages || {});
  const today = new Date().toISOString().split("T")[0];
  const [input, setInput] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const [users] = useAtom(usersAtom);
  const [user, setUser] = useState(chatRoom?.users[1] || users[0]);
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
      const updatedMessages = { ...prev };

      if (!updatedMessages[date]) {
        updatedMessages[date] = [];
      }

      const newMessage = {
        id: updatedMessages[date].length + 1,
        user: user,
        otherUser: user == users[0] ? users[1] : users[0],
        text: input,
        time: new Date().toLocaleTimeString("ko-KR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      };

      updatedMessages[date].push(newMessage);

      // localStorage에 저장 추가
      localStorage.setItem("chatMessages", JSON.stringify(updatedMessages));

      return updatedMessages;
    });

    setInput("");
    setIsMessage(false);
  };
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);
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
      setUser(chatRoom?.users[1] || users[1]);
    }
    if (user.id === 2) {
      setUser(chatRoom?.users[0] || users[0]);
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
            <ProfileImg src={user.profileImg}>
              <Status />
            </ProfileImg>
            <UserName onClick={changeUser}>{user.name}</UserName>
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
                const isLast = index === messagesByDate.length - 1;
                const isNextDifferentUser =
                  messagesByDate[index + 1]?.user.id !== message.user.id;

                const showTime = isLast || isNextDifferentUser;
                return (
                  <>
                    <TextContainer user={message.user.id === user.id}>
                      {showTime && message.user.id === user.id && (
                        <Time user={true}>{message.time}</Time>
                      )}
                      <TextContents
                        key={message.id}
                        user={message.user.id === user.id}
                      >
                        {message.text}
                      </TextContents>
                      {showTime && message.user.id !== user.id && (
                        <Time user={false}>{message.time}</Time>
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
