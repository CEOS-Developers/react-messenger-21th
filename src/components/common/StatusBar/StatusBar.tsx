import { useClock } from '@/hooks/useClock';
import * as S from './StatusBar.Styled';
import { STATUS_ITEMS } from '@/constants/status';

function StatusBar({ isProfile }: { isProfile: boolean }) {
  const time = useClock();

  return (
    <S.StatusBarWrapper className="bg-grayscale-07-white">
      <span className="!text-status-bar text-grayscale-00-black">{time}</span>
      <S.StatusList>
        {STATUS_ITEMS.map(({ key, blackIcon: BlackIcon, whiteIcon: WhiteIcon, width, height }) => {
          const IconComponent = isProfile ? WhiteIcon : BlackIcon;

          return (
            <li key={key}>
              <IconComponent style={{ width: `${width}px`, height: `${height}px` }} />
            </li>
          );
        })}
      </S.StatusList>
    </S.StatusBarWrapper>
  );
}

export default StatusBar;
