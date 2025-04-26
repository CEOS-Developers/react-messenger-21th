// src/components/AddChat/CafeSelect.tsx
import { useState } from 'react';
import { cafes, Cafe } from '../../assets/data';
import CafeListItem from './CafeListItem';
import Search from '../Common/Search';
interface CafeSelectProps {
  onSelectCafe: (cafeId: number) => void;
}

const CafeSelect: React.FC<CafeSelectProps> = ({ onSelectCafe }) => {
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = cafes.filter((c: Cafe) => c.name.includes(search.trim()));

  return (
    <div className="flex flex-col px-5">
      {/* 검색창 */}
      <div className="w-full pt-4">
        <Search placeHolder="카페 검색" />
        <p className="c2 mt-2 text-gray-300">
          채팅방 개설 권한이 있는 카페만 보입니다.
        </p>
      </div>

      {/* 리스트 헤더 */}
      <div className="s2 mt-5 font-semibold text-black">카페</div>

      {/* 카페 리스트 */}
      <div className="mt-2">
        {filtered.map((c: Cafe) => (
          <CafeListItem
            key={c.id}
            cafe={c}
            selected={c.id === selectedId}
            onClick={() => {
              setSelectedId(c.id);
              onSelectCafe(c.id);
            }}
          />
        ))}

        {filtered.length === 0 && (
          <p className="p-5 text-center text-gray-400">검색 결과가 없습니다</p>
        )}
      </div>
    </div>
  );
};

export default CafeSelect;
