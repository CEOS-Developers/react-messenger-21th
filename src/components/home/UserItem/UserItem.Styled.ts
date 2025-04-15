import styled from 'styled-components';

const UserItemWrapper = styled.li`
  padding: 10px var(--phone-margin);
  display: flex;

  div {
    width: 100%;
    display: flex;

    .profile-link {
      padding-left: 8px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      flex: 1;
    }
  }
`;

export { UserItemWrapper };
