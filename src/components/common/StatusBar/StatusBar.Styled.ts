import styled from 'styled-components';

const StatusBarWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--statusbar-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10.47px 31.4px;
  z-index: 900;
`;

const StatusList = styled.ul`
  display: flex;
  justify-conent: space-between;
  align-items: center;
  gap: 6.1px;
`;

export { StatusBarWrapper, StatusList };
