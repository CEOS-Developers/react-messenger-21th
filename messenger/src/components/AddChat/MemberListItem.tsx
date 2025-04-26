// src/components/AddChat/MemberListItem.tsx
import React from 'react';
import ProfileIcon from '../../assets/profile.svg?react';

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
      className="flex w-full items-center justify-between px-5 py-3 hover:bg-gray-50"
    >
      <div className="flex items-center gap-3">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={user.name}
            className="h-8 w-8 rounded-full"
          />
        ) : (
          <ProfileIcon className="h-8 w-8 rounded-full fill-gray-200" />
        )}
        <span className="text-base text-black">{user.name}</span>
      </div>
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

export default MemberListItem;
