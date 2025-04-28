import styled from 'styled-components';

export const MyProfileWrapper = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
`;

export const ProfileInfoGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

export const MyName = styled.div`
  ${({ theme }) => theme.typography.body1}
  color: ${({ theme }) => theme.colors.grey09};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px; /* 150% */
  letter-spacing: -0.27px;
`;

export const StatusMessage = styled.div`
  display: flex;
  height: 26px;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.white};
`;

export const StatusText = styled.span`
  display: -webkit-box;
  max-width: 80px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  flex: 1 0 0;

  overflow: hidden;
  color: ${({ theme }) => theme.colors.grey09};
  text-align: right;
  text-overflow: ellipsis;

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  letter-spacing: -0.18px;
`;
