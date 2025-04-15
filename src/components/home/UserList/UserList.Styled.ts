import styled from 'styled-components';

const UserListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
`;

const HeaderSection = styled.div<{ $isFavorite: boolean; $isSearch: boolean }>`
  ${({ $isSearch }) => ($isSearch ? 'position: sticky; top: 96px;' : '')}
  padding: ${({ $isFavorite }) => ($isFavorite ? '8px' : '12px')} var(--phone-margin);
  display: flex;
  flex-direction: ${({ $isFavorite }) => ($isFavorite ? 'row' : 'column')};
  ${({ $isFavorite }) => ($isFavorite ? 'justify-content: space-between' : 'gap: 12px')};

  div {
    gap: 4px;
    display: flex;
    align-items: center;
  }
`;

const SearchSection = styled.div`
  height: 36px;
  border-raidus: 4px;
  padding: 6px 9px;
  gap: 4px;
  display: flex;
  align-items: center;

  input {
    flex: 1;

    &:focus-visible,
    &:focus:not(:focus-visible) {
      outline: none;
    }
  }
`;

export { UserListWrapper, HeaderSection, SearchSection };
