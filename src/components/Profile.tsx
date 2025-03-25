import styled from "styled-components";
import MyBottomSheets from "./MyBottomSheet";
import { useState } from "react";
interface ProfileProps {
  name: string;
  type: string;
}
const Profile = ({ name, type }: ProfileProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  return (
    <>
      <ProfileContainer onClick={() => setIsSheetOpen(true)}>
        <ProfileImg>
          <Status type={type} />
        </ProfileImg>
        <ProfileName type={type}>{name}</ProfileName>
      </ProfileContainer>
      {isSheetOpen && type === "me" && (
        <MyBottomSheets isClose={() => setIsSheetOpen(false)} />
      )}
    </>
  );
};
export default Profile;
const ProfileName = styled.div<{ type: string }>`
  font-size: 14px;
  weight: ${(props) => (props.type === "AI" ? "600" : "400")};
`;
const ProfileContainer = styled.div`
  height: 58px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 13px;
`;
const ProfileImg = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  position: relative;
  background: black;
`;
const Status = styled.div<{ type: string }>`
  position: absolute;
  display: ${(props) => (props.type === "AI" ? "none" : "block")};
  right: 0;
  bottom: 0;
  background: green;
  border-radius: 50%;
  border: solid 2px white;
  width: 10px;
  height: 10px;
`;
