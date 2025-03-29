import styled, { css } from 'styled-components';

import cancelIcon from '@/assets/svgs/Profile/cancel.svg?react';
import giftIcon from '@/assets/svgs/Friend/gift.svg?react';
import faceIDIcon from '@/assets/svgs/Profile/faceID.svg?react';
import settingIcon from '@/assets/svgs/Header/setting.svg?react';
import chatIcon from '@/assets/svgs/TabBar/chat.svg?react';
import linkIcon from '@/assets/svgs/Profile/link.svg?react';

const ProfileDetailOptionIcon = css`
  width: 2.4rem;
  height: 2.4rem;

  path {
    stroke: ${({ theme }) => theme.colors.Grayscale[0]};
  }
`;

export const CancelIcon = styled(cancelIcon)`
  ${ProfileDetailOptionIcon}
`;

export const GiftIconWhite = styled(giftIcon)`
  ${ProfileDetailOptionIcon}
`;

export const FaceIDIcon = styled(faceIDIcon)`
  ${ProfileDetailOptionIcon}
`;

export const SettingIcon = styled(settingIcon)`
  ${ProfileDetailOptionIcon}
`;

// 하단 옵션
const MainOptionStyle = css`
  width: 3.4rem;
  height: 3.4rem;

  path {
    stroke: ${({ theme }) => theme.colors.Grayscale[0]};
    stroke-width: 1.5px;
  }
`;

export const ChatIcon = styled(chatIcon)`
  ${MainOptionStyle}
`;

export const LinkIcon = styled(linkIcon)`
  ${MainOptionStyle}
`;

export const SettingIconMain = styled(settingIcon)`
  ${MainOptionStyle}
`;
