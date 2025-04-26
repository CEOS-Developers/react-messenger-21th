// src/components/AddChat/SelectedMemberChips.tsx
import React from 'react';
import ProfileIcon from '../../assets/profile.svg?react';
import XIcon from '../../assets/delete.svg?react';

interface User {
  userId: number;
  name: string;
  profileImageUrl?: string;
}

interface SelectedMemberChipsProps {
  user: User;
  onRemove: () => void;
}

const SelectedMemberChips: React.FC<SelectedMemberChipsProps> = ({
  user,
  onRemove,
}) => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative">
        {user.profileImageUrl ? (
          <img
            src={user.profileImageUrl}
            alt={user.name}
            className="h-10 w-10 rounded-full"
          />
        ) : (
          <ProfileIcon className="h-10 w-10 rounded-full" />
        )}
        <XIcon
          className="absolute right-0 bottom-0 h-4 w-4"
          onClick={onRemove}
        />
      </div>

      <span className="c2 text-black">{user.name}</span>
    </div>
  );
};

export default SelectedMemberChips;
