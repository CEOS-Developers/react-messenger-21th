// src/components/AddChat/CafeListItem.tsx
import React from 'react';
import CafeProfile from '../../assets/cafe_profile.svg?react';
import CheckedSelectIcon from '../../assets/checked_select.svg?react';
import SelectIcon from '../../assets/select.svg?react';
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
      className="flex w-full items-center justify-between self-stretch py-2"
    >
      <div className="flex items-center gap-2">
        <CafeProfile className="h-10 w-10" />
        <span className="text-center text-base leading-[normal] font-medium text-[color:var(--Black,#17171B)]">
          {cafe.name}
        </span>
      </div>

      {/* 라디오 체크 표시 */}
      {selected ? <CheckedSelectIcon /> : <SelectIcon />}
    </button>
  );
};

export default CafeListItem;
