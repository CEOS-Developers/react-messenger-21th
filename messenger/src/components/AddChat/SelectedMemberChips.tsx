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
    <div className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
      {user.profileImageUrl ? (
        <img
          src={user.profileImageUrl}
          alt={user.name}
          className="h-6 w-6 rounded-full"
        />
      ) : (
        <ProfileIcon className="h-6 w-6 rounded-full fill-gray-200" />
      )}
      <span className="text-sm text-black">{user.name}</span>
      <button
        onClick={onRemove}
        className="text-gray-400 hover:text-gray-600"
      >
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default SelectedMemberChips;
