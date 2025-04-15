import styled from 'styled-components';

const HomeWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const UserGroup = styled.div`
  padding-bottom: 83px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export { HomeWrapper, UserGroup };
