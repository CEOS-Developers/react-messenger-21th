import Search from '../../assets/Icons/List/search.svg?react'
import * as s from './SearchBox.Styled'

const SearchBox = () => {
  return (
    <s.SearchBoxWrapper>
      <s.SearchBoxContainer>
        <Search />
        <s.Input $isM={true} type="text" placeholder="검색" />
      </s.SearchBoxContainer>
    </s.SearchBoxWrapper>
  )
}

export default SearchBox
