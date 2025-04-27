import styled from "styled-components";

export const Arrow = styled.img`
  cursor: pointer;
`;
export const InfoItem = styled.div`
  padding: 8px 4px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #111111;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
`;
export const MenuItem = styled.div`
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
export const MyMenu = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background: #f7f7fb;
`;
export const TextInput = styled.input`
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
export const Text = styled.div<{ introduce?: string }>`
  display: ${(props) => (props.introduce ? "block" : "none")};
  margin-top: 11px;
  height: 18px;
  width: 110px;
  font-size: 12px;
  text-align: center;
  color: #676773;
`;
export const StatusText = styled.div`
  font-size: 14px;
  margin-left: 8px;
  height: 20px;
  margin-right: 2px;
  font-weight: 400;
`;
export const StatusIcon = styled.div<{ status?: string }>`
  width: 8px;
  height: 8px;
  background: ${(props) =>
    props.status === "대화 가능" ? "#00CD9E" : "#C4CDDD"};
  border-radius: 50%;
`;
export const MyStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1px;
`;
export const MyName = styled.div`
  margin-top: 10px;
  font-size: 18px;
  height: 26px;
  font-weight: 600;
`;
export const Camera = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
`;
export const MyImg = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  background: black;
  border-radius: 50%;
`;
export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 20px;
`;
export const CloseButton = styled.button`
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
export const OverLay = styled.div`
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
export const BottomSheet = styled.div`
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
