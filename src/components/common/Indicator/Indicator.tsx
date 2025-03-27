import * as S from './Indicator.Styled';
import * as Icons from '@/assets/icons/navigation';

function Indicator({ isProfile }: { isProfile: boolean }) {
  const Indicator = isProfile ? Icons.IndicatorWhite : Icons.IndicatorBlack;

  return (
    <S.IndicatorWrapper>
      <Indicator className="w-[138px] h-[5px]" />
    </S.IndicatorWrapper>
  );
}

export default Indicator;
