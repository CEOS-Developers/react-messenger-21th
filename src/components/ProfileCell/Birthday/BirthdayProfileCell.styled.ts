import styled from 'styled-components';

export const BirthdayProfileCellContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0;
`;

export const BirthdayProfileSection = styled.section`
  width: 100%;
  height: fit-content;
`;

export const BirthdayProfileCellList = styled.ul`
  width: 100%;
  height: fit-content;
`;

export const BirthdayProfileCellItem = styled.li`
  width: 100%;
  height: fit-content;
`;

export const BirthdayProfileCellItemLink = styled.a`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  // 추후 모바일 터치와 호버 구체화 예정
  &:hover {
    background-color: ${({ theme }) => theme.colors.Grayscale[100]};
  }
`;

export const BirthdayProfileInfoBox = styled.div`
  width: fit-content;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const BirthdatProfileTextInfo = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const BirthdayProfileName = styled.p`
  ${({ theme }) => theme.fontStyles.Body2_medium};
  color: ${({ theme }) => theme.colors.Grayscale[1000]};
`;

export const Birthday = styled.p`
  ${({ theme }) => theme.fontStyles.Caption1_medium};
  color: ${({ theme }) => theme.colors.Grayscale[500]};
`;
