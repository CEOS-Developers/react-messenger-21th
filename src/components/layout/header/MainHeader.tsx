import Search from '@/assets/images/icon/Search.svg?react';
import SearchPerson from '@/assets/images/icon/SearchPerson.svg?react';
import Headphones from '@/assets/images/icon/Headphones.svg?react';
import Settings from '@/assets/images/icon/Settings.svg?react';

const MainHeader = () => {
  return (
    <header className='flex absolute w-full h-fit justify-between px-4 py-3 bg-white'>
      <span className='font-headline-2'>친구</span>
      <span className='flex gap-3 items-center'>
        <Search className='w-6 h-6 text-gray-600 cursor-pointer' />
        <SearchPerson className='w-6 h-6 text-gray-600 cursor-pointer' />
        <Headphones className='w-6 h-6 text-gray-600 cursor-pointer' />
        <Settings className='w-6 h-6 text-gray-600 cursor-pointer' />
      </span>
    </header>
  );
};

export default MainHeader;
