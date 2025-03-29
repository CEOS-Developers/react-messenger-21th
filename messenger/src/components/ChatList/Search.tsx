import SearchIcon from '../../assets/search.svg?react';

const Search = () => {
  return (
    <article className="flex h-9 w-[335px] items-center justify-center gap-2.5 rounded-3xl bg-gray-100 px-2.5 py-1.5">
      <SearchIcon className="text-gray-300" />
      <input
        className="h-full w-full overflow-hidden text-sm leading-[150%] font-normal tracking-[0.035px] text-ellipsis whitespace-nowrap text-black placeholder-gray-300 outline-none"
        placeholder="채팅방, 대화내용 검색"
      />
    </article>
  );
};

export default Search;
