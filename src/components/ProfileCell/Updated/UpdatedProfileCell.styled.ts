import styled from 'styled-components';

export const UpdatedProfileCellContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 0.8rem 0 1.6rem 0;
`;

// 업데이트 친구 리스트 스크롤 영역
export const UpdatedProfileScrollSection = styled.section`
  width: 100%;
  height: fit-content;
  padding-left: 2rem;

  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const UpdatedProfileList = styled.ul`
  position: relative;

  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UpdatedProfileItem = styled.li`
  width: fit-content;
  height: fit-content;
`;

export const UpdatedProfileItemLink = styled.a`
  width: 4rem;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
`;

export const UpdatedProfileName = styled.p`
  width: 100%;
  height: fit-content;
  text-align: center;

  ${({ theme }) => theme.fontStyles.Caption1_medium}
  color: ${({ theme }) => theme.colors.Grayscale[1000]};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  user-select: none;
`;
