import * as S from './MessageItem.Styled';
import * as Types from '@/types';
import { toVisibleTime } from './MessageItem.utils';

type MessageItemProps = {
  msg: Types.Message;
  isMine: boolean;
  isFirst: boolean;
  nextMsg?: Types.Message;
};

function MessageItem({ msg, isMine, isFirst, nextMsg }: MessageItemProps) {
  const isTimeVisible = !nextMsg || toVisibleTime(nextMsg.timestamp) !== toVisibleTime(msg.timestamp);
  const backgroundColor = isMine ? 'bg-point-green' : 'bg-grayscale-07-white';

  return (
    <S.MessageItemWrapper $isMine={isMine}>
      <S.Bubble
        className={`!text-body-02 text-grayscale-00-black ${backgroundColor}`}
        $isMine={isMine}
        $isFirst={isFirst}
      >
        {msg.text}
      </S.Bubble>
      {isTimeVisible && <S.Time className="!text-caption-04 text-grayscale-05">{toVisibleTime(msg.timestamp)}</S.Time>}
    </S.MessageItemWrapper>
  );
}

export default MessageItem;
