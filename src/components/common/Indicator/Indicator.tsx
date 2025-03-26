import * as S from './Indicator.Styled';
import { IndicatorBlack, IndicatorWhite } from '@/assets/icons/navigation';

function Indicator({ isProfile }: { isProfile: boolean }) {
  const Indicator = isProfile ? IndicatorWhite : IndicatorBlack;

  return (
    <S.IndicatorWrapper>
      <Indicator className="w-[138px] h-[5px]" />
    </S.IndicatorWrapper>
  );
}

export default Indicator;
