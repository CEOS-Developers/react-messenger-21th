import styled from 'styled-components';

const NavbarWrapper = styled.nav`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: var(--navbar-height);
  padding: 14px var(--phone-margin) 24px;
  z-index: 900;
`;

const NavList = styled.ul`
  gap: var(--phone-gutter);
  display: flex;

  li {
    display: flex;
    flex: 1;
    justify-content: center;

    .nav-item {
      gap: 1px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export { NavbarWrapper, NavList };
