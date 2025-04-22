import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  max-width: 375px; // PC 최대 너비 제한
  max-height: 728px; // PC 최대 높이 제한
  min-height: 100dvh;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: var(--Grey-Grey05, #6b7280);
  justify-content: center;
  justify-self: center;
  align-items: center;

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 420px) {
    width: 100vw;
    height: 100dvh;
    max-width: 100vw;
    max-height: 100dvh;
    border-radius: 0;
    box-shadow: none;
  }
`;

export const UpperBarContent = styled.div`
  display: flex;
  padding: 14px 21px 14px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const RightButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StatusMessage = styled.p`
  display: flex;
  height: 356px;
  padding: 40px 20px 102px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;

  color: var(--Grey-Grey01, #f3f4f6);
  text-align: right;

  /* Label/Label */
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  width: 375px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 360px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 430px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;
  border-radius: 40px 40px 0px 0px;
  background: var(--Grey-Grey01, #f3f4f6);
`;

export const UserInfoContainer = styled.div`
  display: flex;
  padding: 90px 10px 10px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

export const UserName = styled.p`
  color: var(--Grey-Grey08, #1f2937);
  text-align: center;

  /* Headline/head */
  font-family: 'Pretendard Variable';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px; /* 150% */
  letter-spacing: -0.36px;
`;

export const UserPhone = styled.p`
  align-self: stretch;
  color: var(--Grey-Grey05, #6b7280);
  text-align: center;

  /* Label/Label */
  font-family: 'Pretendard Variable';
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.24px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  flex: 1 0 0;
  align-self: stretch;
`;

export const ButtonAndTextContainer = styled.div`
  display: flex;
  width: 52px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ButtonText = styled.p`
  align-self: stretch;
  color: var(--Grey-Grey07, #374151);
  text-align: center;

  /* Caption/Caption1 */
  font-family: 'Pretendard Variable';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;
