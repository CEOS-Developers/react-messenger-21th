// src/components/AddChat/MemberSelect.tsx
import { useState } from 'react';
import { users, cafeMembers } from '../../assets/data';
import MemberListItem from './MemberListItem';
import SelectedMemberChips from './SelectedMemberChips';

interface MemberSelectProps {
  cafeId: number;
  onBack: () => void;
  onCreateRoom: (memberIds: number[]) => void;
}

const MemberSelect: React.FC<MemberSelectProps> = ({
  cafeId,
  onBack,
  onCreateRoom,
}) => {
  const [search, setSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  // 해당 카페의 멤버 ID 리스트
  const memberIds = cafeMembers[cafeId] || [];

  // 검색어 적용한 유저 리스트
  const filtered = users.filter(
    (u) =>
      memberIds.includes(u.userId) &&
      u.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  const toggle = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex flex-col">
      {/* 선택된 멤버 */}
      {selectedIds.length > 0 && (
        <div className="px-5 pt-4">
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
                  onRemove={() => toggle(id)}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 검색창 */}
      <div className="px-5 pt-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="멤버 검색"
          className="w-full rounded-full border border-gray-200 bg-gray-100 px-4 py-2 text-sm placeholder-gray-300"
        />
      </div>

      {/* 멤버 헤더 */}
      <div className="mt-4 px-5 text-sm font-semibold text-black">멤버</div>

      {/* 멤버 리스트 */}
      <div className="mt-2 divide-y divide-gray-100">
        {filtered.map((u) => (
          <MemberListItem
            key={u.userId}
            user={u}
            selected={selectedIds.includes(u.userId)}
            onClick={() => toggle(u.userId)}
          />
        ))}

        {filtered.length === 0 && (
          <p className="p-5 text-center text-gray-400">검색 결과가 없습니다</p>
        )}
      </div>

      {/* 확인 버튼 (내부에도 배치 가능) */}
      <div className="sticky bottom-0 bg-white px-5 py-4">
        <button
          onClick={() => onCreateRoom(selectedIds)}
          disabled={selectedIds.length === 0}
          className={`w-full rounded-full py-2 text-white ${
            selectedIds.length > 0 ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default MemberSelect;
