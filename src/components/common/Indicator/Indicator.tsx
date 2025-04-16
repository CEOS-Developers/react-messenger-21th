import * as S from './Indicator.Styled';
import * as Icons from '@/assets/icons/indicator';

function Indicator({ isProfile }: { isProfile: boolean }) {
  const textColor = isProfile ? 'text-grayscale-07-white' : 'text-grayscale-00-black';

  return (
    <S.IndicatorWrapper className={`${textColor}`}>
      <Icons.Indicator className="w-[138px] h-[5px]" />
    </S.IndicatorWrapper>
  );
}

export default Indicator;
