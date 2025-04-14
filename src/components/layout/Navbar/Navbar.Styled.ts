import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 83px;
  padding: 14px var(--phone-margin) 24px;
  z-index: 900;
`;

const NavList = styled.ul`
  width: 100%;
  gap: var(--phone-gutter);
  display: flex;

  li {
    flex: 1;
    display: flex;
    justify-content: center;

    .nav-item {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export { NavbarWrapper, NavList };
