import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 83px;
  max-width: 374px; /* phone width - 1px */
  padding: 14px 35px 24px;
  z-index: 999;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 48px;

  li {
    width: 40px;
  }

  li span {
    height: 20px;
  }
`;

export { NavbarWrapper, NavList };
