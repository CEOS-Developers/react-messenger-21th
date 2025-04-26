// src/pages/AddChatPage.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '../components/AppBar';
import CafeSelect from '../components/AddChat/CafeSelect';
import MemberSelect from '../components/AddChat/MemberSelect';

import BackArrowIcon from '../assets/back_arrow.svg?react';

type Step = 'CAFE' | 'MEMBER';

const AddChatPage = () => {
  const [step, setStep] = useState<Step>('CAFE');
  const [selectedCafeId, setSelectedCafeId] = useState<number | null>(null);
  const [selectedMemberIds, setSelectedMemberIds] = useState<number[]>([]);

  const navigate = useNavigate();

  const handleCafeSelect = (cafeId: number) => {
    setSelectedCafeId(cafeId);
    // setStep('MEMBER');
  };

  const handleCreateRoom = (memberIds: number[]) => {
    // 현재 사용자
    const currentUserId =
      /* 로컬에 저장된 current-user 불러오기 or state.user.userId */
      JSON.parse(localStorage.getItem('current-user') || 'null')?.userId;
    // 방 이름
    const roomId = Date.now(); // 임시 ID

    if (selectedCafeId == null || selectedMemberIds.length === 0) return;

    // 2) 로컬스토리지에 빈 메시지 배열로 초기화
    localStorage.setItem(
      `chat-room-${roomId}`,
      JSON.stringify([]), // 빈 배열
    );

    // 생성 후 채팅 페이지로 이동

    navigate(`/chat/${roomId}`, {
      state: {
        roomId,
        participant: [currentUserId, ...memberIds],
      },
    });
  };

  const renderRightIcon = () => {
    if (step === 'CAFE') {
      return selectedCafeId ? (
        <button
          className="b1 text-white"
          onClick={() => setStep('MEMBER')}
        >
          확인
        </button>
      ) : (
        <span className="b1 text-[#067A80]">확인</span>
      );
    }

    if (step === 'MEMBER') {
      return selectedMemberIds && selectedMemberIds.length > 0 ? (
        <button
          className="b1 text-white"
          onClick={() => handleCreateRoom(selectedMemberIds)}
        >
          확인
        </button>
      ) : (
        <span className="b1 text-[#067A80]">확인</span>
      );
    }

    return null;
  };

  return (
    <div className="flex h-screen w-full flex-col">
      <AppBar
        type="gradient"
        title={step === 'CAFE' ? '카페 선택' : '멤버 선택'}
        leftIcon={<BackArrowIcon />}
        onLeftClick={() => {
          if (step === 'MEMBER') {
            setStep('CAFE');
          } else {
            navigate(-1);
          }
        }}
        rightIcon={renderRightIcon()}
      />

      <main className="mt-11 flex flex-1 flex-col overflow-y-auto bg-white">
        {step === 'CAFE' && <CafeSelect onSelectCafe={handleCafeSelect} />}
        {step === 'MEMBER' && selectedCafeId !== null && (
          <MemberSelect
            cafeId={selectedCafeId!}
            selectedIds={selectedMemberIds}
            onToggleMember={(id) =>
              setSelectedMemberIds((prev) =>
                prev.includes(id)
                  ? prev.filter((x) => x !== id)
                  : [...prev, id],
              )
            }
          />
        )}
      </main>
    </div>
  );
};

export default AddChatPage;
