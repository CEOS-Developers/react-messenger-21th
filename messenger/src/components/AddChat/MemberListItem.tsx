// src/components/AddChat/MemberListItem.tsx
import React from 'react';
import ProfileIcon from '../../assets/profile.svg?react';
import CheckedSelectIcon from '../../assets/checked_select.svg?react';
import SelectIcon from '../../assets/select.svg?react';

interface User {
  userId: number;
  name: string;
  profileImageUrl?: string;
}

interface MemberListItemProps {
  user: User;
  selected: boolean;
  onClick: () => void;
}

const MemberListItem: React.FC<MemberListItemProps> = ({
  user,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between self-stretch py-2"
    >
      <div className="flex items-center gap-2">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={user.name}
            className="h-10 w-10 rounded-full"
          />
        ) : (
          <ProfileIcon className="h-10 w-10" />
        )}
        <span className="text-center text-base leading-[normal] font-medium text-[color:var(--Black,#17171B)]">
          {user.name}
        </span>
      </div>
      {selected ? <CheckedSelectIcon /> : <SelectIcon />}
    </button>
  );
};

export default MemberListItem;
