import { PageHeader, SubNav, Title } from "./FriendPage";
import manage from "/image/manage.svg";
import search from "/image/search.svg";
import addFriend from "/image/addFriend.svg";
import ChatToggle from "../components/ChatToggle";
import ChatContents from "../components/ChatContents";

const ChatPage = () => {
  return (
    <>
      <PageHeader>
        <Title>
          메시지
          <SubNav>
            <img src={search} />
            <img src={manage} />
            <img src={addFriend} />
          </SubNav>
        </Title>
        <ChatToggle />
        <ChatContents />
      </PageHeader>
    </>
  );
};
export default ChatPage;
