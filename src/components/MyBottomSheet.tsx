import styled from "styled-components";
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
import { UserListItem } from "../store/message";

interface MyBottomSheetsProps {
  isClose: () => void;
  type: string;
  userItem?: UserListItem;
}
const MyBottomSheets = ({ isClose, type, userItem }: MyBottomSheetsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
              <TextInput placeholder={"대화명을 입력해보세요"} />
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

const Arrow = styled.img`
  cursor: pointer;
`;
const InfoItem = styled.div`
  padding: 8px 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #111111;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
const MenuItem = styled.div`
  width: calc(100% / 3);
  height: 90px;
  background: #f7f7fb;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #676773;
  gap: 12px;
`;
const MyMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #f7f7fb;
`;
const TextInput = styled.input`
  margin-top: 11px;
  height: 18px;
  width: 110px;
  font-size: 12px;
  border: none;
  text-align: center;
  &::placeholder {
    color: #cbcccd;
  }
`;
const Text = styled.div<{ introduce?: string }>`
  display: ${(props) => (props.introduce ? "block" : "none")};
  margin-top: 11px;
  height: 18px;
  width: 110px;
  font-size: 12px;
  text-align: center;
  color: #676773;
`;
const StatusText = styled.div`
  font-size: 14px;
  margin-left: 8px;
  height: 20px;
  margin-right: 2px;
  font-weight: 400;
`;
const StatusIcon = styled.div<{ status?: string }>`
  width: 8px;
  height: 8px;
  background: ${(props) =>
    props.status === "대화 가능" ? "#00CD9E" : "#C4CDDD"};
  border-radius: 50%;
`;
const MyStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;
const MyName = styled.div`
  margin-top: 10px;
  font-size: 18px;
  height: 26px;
  font-weight: 600;
`;
const Camera = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
`;
const MyImg = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  background: black;
  border-radius: 50%;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 20px;
`;
const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 20px;
  height: 20px;
  background: url("/image/close.svg") no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
`;
const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;
const BottomSheet = styled.div`
  position: fixed;
  bottom: 0;
  width: 375px;
  height: 510px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-top: 48px;
  padding-left: 20px;
  padding-right: 20px;
  z-index: 3;
  border-radius: 24px 24px 0 0;
  transform: translateY(100%);
  animation: slideUp 0.4s ease-out forwards;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
`;
