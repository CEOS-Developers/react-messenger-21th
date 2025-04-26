// src/components/AddChat/MemberSelect.tsx
import { useState } from 'react';
import { users, cafeMembers } from '../../assets/data';
import MemberListItem from './MemberListItem';
import SelectedMemberChips from './SelectedMemberChips';
import Search from '../Common/Search';

interface MemberSelectProps {
  cafeId: number;
  selectedIds: number[]; // 부모가 관리하는 선택된 멤버 ID 배열
  onToggleMember: (id: number) => void; // 토글용 콜백
  onCreateRoom: () => void; // 확인 버튼 클릭 핸들러
}

const MemberSelect: React.FC<MemberSelectProps> = ({
  cafeId,
  selectedIds,
  onToggleMember,
  onCreateRoom,
}) => {
  const [search, setSearch] = useState('');

  // 해당 카페의 멤버 ID 리스트
  const memberIds = cafeMembers[cafeId] || [];

  // 검색어 적용한 유저 리스트
  const filtered = users.filter(
    (u) =>
      memberIds.includes(u.userId) &&
      u.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div className="flex flex-col px-5">
      {/* 선택된 멤버 표시 */}
      {selectedIds.length > 0 && (
        <div className="pt-4">
          <span className="text-sm font-medium text-black">
            {selectedIds.length}명 초대
          </span>
          <div className="mt-2 flex gap-2 overflow-x-auto">
            {selectedIds.map((id) => {
              const user = users.find((u) => u.userId === id)!;
              return (
                <SelectedMemberChips
                  key={id}
                  user={user}
                  onRemove={() => onToggleMember(id)}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 검색창 */}
      <div className="w-full pt-4">
        <Search placeHolder="카페 검색" />
      </div>

      {/* 멤버 헤더 */}
      <div className="mt-5 text-sm font-semibold text-black">멤버</div>

      {/* 멤버 리스트 */}
      <div className="mt-2">
        {filtered.map((u) => (
          <MemberListItem
            key={u.userId}
            user={u}
            selected={selectedIds.includes(u.userId)}
            onClick={() => onToggleMember(u.userId)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberSelect;
