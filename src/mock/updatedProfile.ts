import { UserProfile } from '@/schemas/userProfile';

interface UpdatedProfile extends UserProfile {
  isUpdated: boolean;
}

export const updatedProfileList: UpdatedProfile[] = [
  {
    userId: '1',
    username: '유경',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '2',
    username: '봉윤',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '3',
    username: '옥유진',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: false,
  },
  {
    userId: '4',
    username: 'Kyusun',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '5',
    username: '승표',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: false,
  },
  {
    userId: '6',
    username: '구자용',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '7',
    username: '이지원',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '8',
    username: '박시원',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: false,
  },
  {
    userId: '9',
    username: '김예진',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '10',
    username: '김서영',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
  {
    userId: '11',
    username: '일킥 김예희(m)',
    profileImage: '',
    snsUrl: 'https://www.instagram.com/',
    birthday: '1999-01-01',
    isUpdated: true,
  },
];
