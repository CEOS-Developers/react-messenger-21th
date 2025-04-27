import {
  OverLay,
  BottomSheet,
  CloseButton,
  Contents,
  MyImg,
  MyName,
  MyStatus,
  StatusIcon,
  StatusText,
  Arrow,
  TextInput,
  Text,
  MyMenu,
  MenuItem,
  Info,
  InfoItem,
  Camera,
} from "../styles/BottomSheet/BottomSheetStyle";
import camera from "/image/camera.svg";
import mychat from "/image/mychat.svg";
import files from "/image/files.svg";
import setting from "/image/setting.svg";
import call from "/image/call.svg";
import email from "/image/email.svg";
import birth from "/image/birth.svg";
import arrowDown from "/image/arrowDown.svg";
import { useState } from "react";
import MyModal from "./MyModal";
import { userAtom, UserListItem } from "../store/message";
import { useAtom } from "jotai";

interface MyBottomSheetsProps {
  isClose: () => void;
  type: string;
  userItem?: UserListItem;
}
const MyBottomSheets = ({ isClose, type, userItem }: MyBottomSheetsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useAtom(userAtom);
  const onChangeIntroduce = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newIntroduce = e.target.value;
    setCurrentUser((prev) => ({
      ...prev,
      introduce: newIntroduce,
    }));
  };
  return (
    <>
      {isModalOpen && <MyModal isClose={() => setIsModalOpen(false)} />}
      <OverLay onClick={isClose}>
        <BottomSheet onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={isClose} />
          <Contents>
            <MyImg>{type === "me" && <Camera src={camera} />}</MyImg>
            <MyName>{userItem?.user.name}</MyName>
            <MyStatus>
              <StatusIcon status={userItem?.user.status} />
              <StatusText>{userItem?.user.status}</StatusText>
              {type === "me" && (
                <Arrow
                  src={arrowDown}
                  onClick={() => setIsModalOpen(!isModalOpen)}
                />
              )}
            </MyStatus>
            {type === "me" && (
              <TextInput
                placeholder={"대화명을 입력해보세요"}
                value={currentUser.introduce}
                onChange={onChangeIntroduce}
              />
            )}
            {type === "friend" && (
              <Text introduce={userItem?.introduce}>{userItem?.introduce}</Text>
            )}
          </Contents>
          <MyMenu>
            {type === "me" ? (
              <>
                <MenuItem>
                  <img src={mychat} />
                  내게쓰기
                </MenuItem>
                <MenuItem>
                  <img src={files} />
                  파일함
                </MenuItem>
                <MenuItem>
                  <img src={setting} />
                  상세설정
                </MenuItem>
              </>
            ) : (
              <>
                <MenuItem>
                  <img src={mychat} />
                  메시지
                </MenuItem>
                <MenuItem>
                  <img src={files} />
                  전화
                </MenuItem>
              </>
            )}
          </MyMenu>
          <Info>
            <InfoItem>
              <img src={email} />
              {userItem?.email}
            </InfoItem>
            <InfoItem>
              <img src={call} />
              {userItem?.phoneNumber}
            </InfoItem>
            <InfoItem>
              <img src={birth} />
              {userItem?.birth}
            </InfoItem>
          </Info>
        </BottomSheet>
      </OverLay>
    </>
  );
};
export default MyBottomSheets;
