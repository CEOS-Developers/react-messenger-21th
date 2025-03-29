import styled from "styled-components";

interface MyModalProps {
  isClose: () => void;
}
const MyModal = ({ isClose }: MyModalProps) => {
  return (
    <>
      <OverLay onClick={isClose}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <StateButtons>
            <StateButton top={true}>대화가능</StateButton>
            <StateButton>회의</StateButton>
            <StateButton>방해금지</StateButton>
            <StateButton>휴가</StateButton>
          </StateButtons>
          <CancelButton onClick={isClose}>취소</CancelButton>
        </Modal>
      </OverLay>
    </>
  );
};
export default MyModal;

const StateButton = styled.button<{ top?: boolean }>`
  background: #fff;
  border: none;
  height: calc(100% / 4);
  border-top: ${({ top }) => (!top ? "1px solid #e9ecef" : "none")};
  background: transparent;
`;
const StateButtons = styled.div`
  width: 100%;
  height: 216px;
  flex-direction: column;
  display: flex;
  border-radius: 10px;
  background: #fff;
`;
const OverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
`;
const CancelButton = styled.button`
  width: 100%;
  background: #fff;
  height: 54px;
  gap: 8px;
  padding: 14px 8px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
const Modal = styled.div`
  position: absolute;
  bottom: 34px;
  width: 347px;
  height: 278px;
  z-index: 300;
  background: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
