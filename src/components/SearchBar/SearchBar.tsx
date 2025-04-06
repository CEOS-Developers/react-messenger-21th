import { useState } from 'react';

import { SearchIconSmall } from '@/icons/Header';

import {
  searchBarSlideVariants,
  searchBarTransition,
} from '@/animation/searchBarSlide';

import * as S from './SearchBar.styled';

type SearchBarProps = {
  placeholder: string;
};

const SearchBar = ({ placeholder }: SearchBarProps) => {
  const [query, setQuery] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <S.SearchBarContainer
      key="search-bar"
      initial="hidden"
      animate="visible"
      exit="exit"
      layout
      transition={searchBarTransition}
      variants={searchBarSlideVariants}
    >
      <S.SearchInputContainer $isFocused={isFocused}>
        <SearchIconSmall />
        <S.SearchInput
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
        />
      </S.SearchInputContainer>
    </S.SearchBarContainer>
  );
};

export default SearchBar;
