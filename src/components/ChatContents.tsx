import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import defaulImg from "/image/defaultImg.svg";
import {
  ChatMessages,
  chatRoomAtom,
  chatRoomsAtom,
  chatRoomTypeAtom,
} from "../store/message";
import { useEffect } from "react";

const ChatContents = () => {
  const [activeTab] = useAtom(chatRoomTypeAtom);
  const [chatRooms] = useAtom(chatRoomsAtom);
  const [, setChatRoom] = useAtom(chatRoomAtom);
  const findPreview = (messages: ChatMessages) => {
    const keys = Object.keys(messages);
    const lastKey = keys[keys.length - 1];
    const lastMessages = messages[lastKey];
    return lastMessages[lastMessages.length - 1];
  };
  useEffect(() => {
    Object.keys(chatRooms).map((key) => {
      console.log(chatRooms[key].type === activeTab);
    });
  }, []);
  return (
    <>
      {Object.keys(chatRooms).map(
        (key) =>
          chatRooms[key].type === activeTab && (
            <Link
              key={key}
              to={`/chatRoom?roomId=${key}`}
              onClick={() => setChatRoom(chatRooms[key])}
            >
              <ChatContainer>
                <InfoContainer>
                  <UserImg />
                  <ChatInfo>
                    <UserName>{chatRooms[key].users[1].name}</UserName>
                    <ChatPreview>
                      {findPreview(chatRooms[key].messages).text}
                    </ChatPreview>
                  </ChatInfo>
                </InfoContainer>
                <DetailInfo>
                  <Date>{findPreview(chatRooms[key].messages).time}</Date>
                  <ChatCount>1</ChatCount>
                </DetailInfo>
              </ChatContainer>
            </Link>
          )
      )}
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
  padding: 10.5px 0;
`;
const UserImg = styled.div<{ src?: string }>`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  background: url(${(props) => (props.src ? props.src : defaulImg)});
`;
const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`;
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
