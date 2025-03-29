import * as I from '@/icons/Profile';

export const PROFILE_SIZE_LIST = {
  my: 60,
  updated: 40,
  basic: 44,
  detail: 110,
  personalChat: 50,
  groupChat: 22,
  chatRoom: 36,
};

export const PROFILE_DETAIL_SUB_OPTION_LIST = [
  { id: 1, icon: I.GiftIconWhite },
  { id: 2, icon: I.FaceIDIcon },
  { id: 3, icon: I.SettingIcon },
];

export const PROFILE_DETAIL_MAIN_OPTION_LIST = [
  { id: 1, icon: I.ChatIcon, name: '1:1 채팅' },
  { id: 2, icon: I.LinkIcon, name: 'SNS 링크' },
  { id: 3, icon: I.SettingIconMain, name: '설정' },
];
