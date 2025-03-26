import styled, { css } from 'styled-components';

import addUserIcon from '@/assets/svgs/Header/add-user.svg?react';
import searchIcon from '@/assets/svgs/Header/search.svg?react';
import musicIcon from '@/assets/svgs/Header/music.svg?react';
import settingIcon from '@/assets/svgs/Header/setting.svg?react';

const IconCommon = css`
  width: 2.4rem;
  height: fit-content;
`;

export const AddUserIcon = styled(addUserIcon)`
  ${IconCommon}
`;

export const SearchIcon = styled(searchIcon)`
  ${IconCommon}
`;

export const MusicIcon = styled(musicIcon)`
  ${IconCommon}
`;

export const SettingIcon = styled(settingIcon)`
  ${IconCommon}
`;
