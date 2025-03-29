import styled from 'styled-components';

import backArrowIcon from '@/assets/svgs/Chat/back-arrow.svg?react';
import hamburgerIcon from '@/assets/svgs/Chat/hamburger.svg?react';
import plusIcon from '@/assets/svgs/Chat/plus.svg?react';
import emojiIcon from '@/assets/svgs/Chat/emoji.svg?react';
import hashtagIcon from '@/assets/svgs/Chat/hashtag.svg?react';
import sendIcon from '@/assets/svgs/Chat/send.svg?react';

export const BackArrowIcon = styled(backArrowIcon)`
  width: 1.2rem;
  height: 2rem;
`;

export const HamburgerIcon = styled(hamburgerIcon)`
  width: 2.4rem;
  height: fit-content;
`;

export const ChatRoomPlusIcon = styled(plusIcon)`
  width: 1.4rem;
  height: fit-content;
`;

export const EmojiIcon = styled(emojiIcon)`
  width: 2rem;
  height: fit-content;
`;

export const HashtagIcon = styled(hashtagIcon)`
  width: 1.4rem;
  height: fit-content;
`;

export const SendIcon = styled(sendIcon)``;
