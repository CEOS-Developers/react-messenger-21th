import { Link, useLocation } from 'react-router-dom';
import * as S from './Navbar.Styled';
import { NAV_ITEMS } from '@/constants/navigation';

function Navbar() {
  const { pathname } = useLocation();

  return (
    <S.NavbarWrapper className="bg-grayscale-07-white shadow-[inset_0_1px_0_0_theme(colors.grayscale-04)]">
      <S.NavList>
        {NAV_ITEMS.map(({ label, path, lineIcon: LineIcon, solidIcon: SolidIcon }) => {
          const isActive = pathname === path;
          const IconComponent = isActive ? SolidIcon : LineIcon;

          return (
            <li key={path}>
              <Link to={path} className="flex flex-col items-center gap-[1px]">
                <IconComponent className="w-[24px] h-[24px]" />
                <span className="!text-caption-02">{label}</span>
              </Link>
            </li>
          );
        })}
      </S.NavList>
    </S.NavbarWrapper>
  );
}

export default Navbar;
