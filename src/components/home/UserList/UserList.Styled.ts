import styled from 'styled-components';

const UserListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div`
  padding: 8px var(--phone-margin);
  display: flex;
  justify-content: space-between;

  div {
    gap: 4px;
    display: flex;
    align-items: center;
  }
`;

const ListSection = styled.ul``;

export { UserListWrapper, HeaderSection, ListSection };
