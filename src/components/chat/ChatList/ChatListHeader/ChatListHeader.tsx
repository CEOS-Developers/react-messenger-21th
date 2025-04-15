import * as S from './ChatListHeader.Styled';
import * as Icons from '@/assets/icons/chatlist';

type ChatListHeaderProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
};

function ChatListHeader({ searchValue, setSearchValue }: ChatListHeaderProps) {
  return (
    <S.ChatListHeaderWrapper className="bg-white-tp-01 shadow-[inset_0_-1px_0_0_theme(colors.grayscale-05)]">
      <S.FeatureSection>
        <span className="!text-headline-03 text-grayscale-00-black">대화</span>
        <div>
          <Icons.Edit className="w-[24px] h-[24px]" />
          <Icons.Add className="w-[24px] h-[24px]" />
        </div>
      </S.FeatureSection>
      <S.SearchSection className="bg-grayscale-05">
        <Icons.Search className="w-[24px] h-[24px]" />
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="검색"
          className="!text-caption-02 text-grayscale-00-black placeholder-grayscale-02"
        />
        {searchValue.length > 0 && (
          <button onClick={() => setSearchValue('')} className="cursor-pointer">
            <Icons.Delete className="w-[24px] h-[24px] text-grayscale-03" />
          </button>
        )}
      </S.SearchSection>
    </S.ChatListHeaderWrapper>
  );
}

export default ChatListHeader;
