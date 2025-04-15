import * as Icons from '@/assets/icons/profile';

const PROFILE_ITEMS = [
  [
    {
      label: '대화하기',
      Icon: Icons.Chat,
      isButton: true,
    },
    {
      label: '음성통화',
      Icon: Icons.Voice,
      isButton: false,
    },
    {
      label: '영상통화',
      Icon: Icons.Video,
      isButton: false,
    },
  ],
  [
    {
      label: '친구 추가',
      Icon: Icons.Qr,
      isButton: false,
    },
    {
      label: '프로필 편집',
      Icon: Icons.Edit,
      isButton: false,
    },
    {
      label: 'Keep 메모',
      Icon: Icons.Bookmark,
      isButton: false,
    },
  ],
];

export { PROFILE_ITEMS };
