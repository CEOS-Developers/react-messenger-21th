import Search from '../../assets/Icons/List/search.svg?react'

const SearchBox = ({
  searchText,
  setSearchText,
}: {
  searchText: string
  setSearchText: (value: string) => void
}) => {
  const onChangeInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value)
  }
  return (
    <div className="bg-gray03 border-gray13 flex h-[34px] items-center gap-1 rounded px-2">
      <Search />
      <input
        className="font-Caption-m flex-grow border-none bg-transparent py-[0.5px] focus:outline-none"
        value={searchText}
        onChange={onChangeInputHandler}
        type="text"
        placeholder="검색"
      />
    </div>
  )
}

export default SearchBox
