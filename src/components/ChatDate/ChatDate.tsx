import { JSX } from 'react/jsx-runtime';

import * as S from './ChatDate.styled';
import { formatMessageDate } from '@/utils/formatDate';

type ChatDateProps = {
  date: string;
};

const ChatDate = ({ date }: ChatDateProps): JSX.Element => {
  return (
    <S.ChatDateContainer>
      <S.ChatDateLabel>{formatMessageDate(date)}</S.ChatDateLabel>
    </S.ChatDateContainer>
  );
};

export default ChatDate;
