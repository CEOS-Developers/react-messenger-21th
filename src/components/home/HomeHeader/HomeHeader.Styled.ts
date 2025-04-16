import styled from 'styled-components';

const HomeHeaderWrapper = styled.header`
  position: absolute;
  top: var(--statusbar-height);
  width: 100%;
  heigth: 46px;
  padding: 11px var(--phone-margin);
  gap: 8px;
  display: flex;
  flex-direction: row-reverse;
`;

export { HomeHeaderWrapper };
