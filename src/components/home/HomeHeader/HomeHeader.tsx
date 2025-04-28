import * as S from './HomeHeader.Styled';
import * as Icons from '@/assets/icons/home';

function HomeHeader() {
  return (
    <S.HomeHeaderWrapper className="bg-grayscale-07-white">
      <Icons.AddUser className="w-[24px] h-[24px]" />
      <Icons.Settings className="w-[24px] h-[24px]" />
      <Icons.Bell className="w-[24px] h-[24px]" />
    </S.HomeHeaderWrapper>
  );
}

export default HomeHeader;
