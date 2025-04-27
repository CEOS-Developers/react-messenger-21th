import styled from "styled-components";
import MyBottomSheets from "./MyBottomSheet";
import { useState } from "react";
import { UserListItem } from "../store/message";
interface ProfileProps {
  user?: UserListItem;
  type: string;
  express?: string;
}
const Profile = ({ user, type, express }: ProfileProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <>
      <ProfileContainer onClick={() => setIsSheetOpen(true)}>
        <ProfileImg>
          <Status type={type} status={user?.user.status} />
        </ProfileImg>
        <ProfileName type={type}>
          {user ? user?.user.name : express}
          <Introduce introduce={user?.introduce}>{user?.introduce}</Introduce>
        </ProfileName>
      </ProfileContainer>
      {isSheetOpen && type === "me" && (
        <MyBottomSheets
          isClose={() => setIsSheetOpen(false)}
          type={type}
          userItem={user}
        />
      )}
      {isSheetOpen && type === "friend" && (
        <MyBottomSheets
          isClose={() => setIsSheetOpen(false)}
          type={type}
          userItem={user}
        />
      )}
    </>
  );
};
export default Profile;
const Introduce = styled.div<{ introduce?: string }>`
  display: ${(props) => (props.introduce ? "block" : "none")};
  font-size: 12px;
  color: #8a8f96;
  height: 18px;
  line-height: 1.8;
`;
const ProfileName = styled.div<{ type: string }>`
  font-size: 14px;
  weight: ${(props) => (props.type === "AI" ? "600" : "400")};
  display: flex;
  flex-direction: column;
`;
const ProfileContainer = styled.div`
  height: 58px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
`;
const ProfileImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  position: relative;
  background: black;
`;
const Status = styled.div<{ type: string; status?: string }>`
  position: absolute;
  display: ${(props) => (props.type === "AI" ? "none" : "block")};
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.status === "대화 가능" ? "#00CD9E" : "#C4CDDD"};
  border-radius: 50%;
  border: solid 2px white;
  width: 10px;
  height: 10px;
`;
