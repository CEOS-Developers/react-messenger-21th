import SearchIcon from '../../assets/search.svg?react';

interface SearchProps {
  placeHolder: string;
}

const Search = ({ placeHolder }: SearchProps) => {
  return (
    <article className="flex h-9 w-full items-center justify-center gap-2.5 rounded-3xl bg-gray-100 px-2.5 py-1.5">
      <SearchIcon className="text-gray-300" />
      <input
        className="h-full w-full overflow-hidden text-sm leading-[150%] font-normal tracking-[0.035px] text-ellipsis whitespace-nowrap text-black placeholder-gray-300 outline-none"
        placeholder={placeHolder}
      />
    </article>
  );
};

export default Search;
