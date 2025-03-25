import styled from "styled-components";
import camera from "/image/camera.svg";
import mychat from "/image/mychat.svg";
import files from "/image/files.svg";
import setting from "/image/setting.svg";

interface MyBottomSheetsProps {
  isClose: () => void;
}
const MyBottomSheets = ({ isClose }: MyBottomSheetsProps) => {
  return (
    <OverLay onClick={isClose}>
      <BottomSheet onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={isClose} />
        <Contents>
          <MyImg>
            <Camera src={camera} />
          </MyImg>
          <MyName>김민수</MyName>
          <MyStatus>
            <StatusIcon />
            <StatusText>대화가능</StatusText>
          </MyStatus>
          <TextInput placeholder="대화명을 입력해보세요" />
        </Contents>
        <MyMenu>
          <MenuItem>
            <MenuIcon src={mychat} />
            내게쓰기
          </MenuItem>
          <MenuItem>
            <MenuIcon src={files} />
            파일함
          </MenuItem>
          <MenuItem>
            <MenuIcon src={setting} />
            상세설정
          </MenuItem>
        </MyMenu>
      </BottomSheet>
    </OverLay>
  );
};
export default MyBottomSheets;
const MenuIcon = styled.img``;
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
`;
const TextInput = styled.input`
  margin-top: 11px;
  height: 18px;
  width: 110px;
  font-size: 12px;
  border: none;
  &::placeholder {
    color: #cbcccd;
  }
`;
const StatusText = styled.div`
  font-size: 16px;
  margin-left: 8px;
  height: 20px;
  font-weight: 400;
`;
const StatusIcon = styled.div`
  width: 8px;
  height: 8px;
  background: green;
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
