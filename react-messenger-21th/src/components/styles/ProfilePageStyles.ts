import styled from 'styled-components';

// 스타일
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 48px 1fr auto; // 마지막 줄을 auto로
  box-sizing: border-box;
`;

export const UpperBar = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background-color: white;
  border-bottom: 1px solid #ddd;
  z-index: 100;
`;

export const Title = styled.div`
  flex: 1 0 0;
  color: ${({ theme }) => theme.colors.grey09};

  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
  letter-spacing: -0.27px;
`;

export const IconGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const FriendsBoard = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey03};
  overflow-y: auto;
`;

export const BottomBar = styled.div`
  height: auto;
  align-items: stretch;
  width: 100%;
  display: flex;
  padding: 12px 20px 12px 20px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
`;

export const MyProfileContainer = styled.div`
  width: 100%;
  height: 100%;
`;
