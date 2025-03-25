import styled from "styled-components";
import friend from "/image/friend.svg";
import chat from "/image/chat.svg";
import teamRoom from "/image/teamRoom.svg";
import news from "/image/news.svg";
import plus from "/image/plus.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <NavContainer>
      <Link to="/">
        <IconImg src={friend} />
      </Link>
      <Link to="/chat">
        <IconImg src={chat} />
      </Link>
      <IconImg src={teamRoom} />
      <IconImg src={news} />
      <IconImg src={plus} />
    </NavContainer>
  );
};
export default NavBar;
const NavContainer = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
  width: 100%;
  height: 82px;
  border-top: 1px solid #e0e5eb;
  padding-bottom: 34px;
`;
const IconImg = styled.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
  &:hover {
  }
`;
