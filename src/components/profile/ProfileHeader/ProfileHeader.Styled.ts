import styled from 'styled-components';

const ProfileHeaderWrapper = styled.header`
  position: absolute;
  top: var(--statusbar-height);
  width: 100%;
  padding: 11px var(--phone-margin);
  display: flex;
  justify-content: space-between;

  div {
    gap: 8px;
    display: flex;

    a {
      text-decoration: none;
    }
  }
`;

export { ProfileHeaderWrapper };
