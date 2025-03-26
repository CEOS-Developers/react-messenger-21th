import styled from 'styled-components';

const StatusBarWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 49.71px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
