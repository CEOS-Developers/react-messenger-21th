// src/components/AddChat/CafeListItem.tsx
import React from 'react';

export interface Cafe {
  id: number;
  name: string;
  description?: string;
  iconUrl?: string;
}

interface CafeListItemProps {
  cafe: Cafe;
  selected: boolean;
  onClick: () => void;
}

const CafeListItem: React.FC<CafeListItemProps> = ({
  cafe,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between px-5 py-3 hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        {/* 아이콘이 따로 없으면 기본 회색 원 */}
        <div className="h-8 w-8 rounded-full bg-gray-200" />

        <span className="text-base text-black">{cafe.name}</span>
      </div>

      {/* 라디오 체크 표시 */}
      {selected ? (
        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-200">
          <span className="text-xs font-bold text-white">✔︎</span>
        </div>
      ) : (
        <div className="h-5 w-5 rounded-full border border-gray-200" />
      )}
    </button>
  );
};

export default CafeListItem;
