import { useClock } from '@/hooks/useClock';
import * as S from './StatusBar.Styled';
import { STATUS_ITEMS } from '@/constants/status';

function StatusBar({ isProfile, isChatRoom }: { isProfile: boolean; isChatRoom: boolean }) {
  const time = useClock();
  const backgroundColor = isChatRoom
    ? 'bg-background-blue-02-opacity'
    : isProfile
      ? 'bg-transparent'
      : 'bg-grayscale-07-white';
  const textColor = isProfile ? 'text-grayscale-07-white' : 'text-grayscale-00-black';

  return (
    <S.StatusBarWrapper className={`${backgroundColor}`}>
      <span className={`!text-status-bar ${textColor}`}>{time}</span>
      <S.StatusList>
        {STATUS_ITEMS.map(({ key, Icon, width, height }) => {
          return (
            <li key={key} className={`${textColor}`}>
              <Icon style={{ width: `${width}px`, height: `${height}px` }} />
            </li>
          );
        })}
      </S.StatusList>
    </S.StatusBarWrapper>
  );
}

export default StatusBar;
