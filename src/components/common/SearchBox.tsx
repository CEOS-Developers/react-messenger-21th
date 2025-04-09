import Search from '../../assets/Icons/List/search.svg?react'
import * as s from './SearchBox.Styled'

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
    <s.SearchBoxWrapper>
      <s.SearchBoxContainer>
        <Search />
        <s.Input
          value={searchText}
          onChange={onChangeInputHandler}
          $isM={true}
          type="text"
          placeholder="검색"
        />
      </s.SearchBoxContainer>
    </s.SearchBoxWrapper>
  )
}

export default SearchBox
