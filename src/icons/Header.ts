import styled, { css } from 'styled-components';

import addUserIcon from '@/assets/svgs/Header/add-user.svg?react';
import searchIcon from '@/assets/svgs/Header/search.svg?react';
import musicIcon from '@/assets/svgs/Header/music.svg?react';
import settingIcon from '@/assets/svgs/Header/setting.svg?react';
import addChatIcon from '@/assets/svgs/Header/add-chat.svg?react';

const IconCommon = css`
  width: 2.4rem;
  height: 2.4rem;
`;

export const AddUserIcon = styled(addUserIcon)`
  ${IconCommon}
`;

export const SearchIcon = styled(searchIcon)`
  ${IconCommon}
`;

export const SearchIconSmall = styled(searchIcon)`
  width: 1.6rem;
  height: 1.6rem;

  path {
    stroke: ${({ theme }) => theme.colors.Grayscale[600]};
  }
`;

export const MusicIcon = styled(musicIcon)`
  ${IconCommon}
`;

export const SettingIcon = styled(settingIcon)`
  ${IconCommon}
`;

export const AddChatIcon = styled(addChatIcon)`
  ${IconCommon}
`;
