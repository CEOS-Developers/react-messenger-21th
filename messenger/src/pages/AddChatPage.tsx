// src/pages/AddChatPage.tsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AppBar from '../components/AppBar';
import CafeSelect from '../components/AddChat/CafeSelect';
import MemberSelect from '../components/AddChat/MemberSelect';

import BackArrowIcon from '../assets/back_arrow.svg?react';

type Step = 'CAFE' | 'MEMBER';

const AddChatPage = () => {
  const [step, setStep] = useState<Step>('CAFE');
  const [selectedCafeId, setSelectedCafeId] = useState<number | null>(null);
  const [selectedMembers, setSelectedMembers] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleCafeSelect = (cafeId: number) => {
    setSelectedCafeId(cafeId);
    // setStep('MEMBER');
  };

  const handleCreateRoom = (memberIds: number[]) => {
    // TODO: 방 생성 로직 (localStorage 저장 등) 추가
    // 현재 사용자 자동 포함
    // 방 이름 자동 생성 (예: 멤버 이름 조합)
    // 생성 후 채팅 페이지로 이동
    const roomId = Date.now(); // 임시 ID
    navigate(`/chat/${roomId}`, {
      state: {
        roomId,
        participant: [
          /* currentUserId, ...memberIds */
        ],
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

    // if (step === 'MEMBER') {
    //   return selectedMembers && selectedMembers.length > 0 ? (
    //     <button
    //       className="b1 text-white"
    //       onClick={handleCreateChatRoom}
    //     >
    //       확인
    //     </button>
    //   ) : (
    //     <span className="b1 text-[#067A80]">확인</span>
    //   );
    // }

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
            cafeId={selectedCafeId}
            onBack={() => setStep('CAFE')}
            onCreateRoom={handleCreateRoom}
          />
        )}
      </main>
    </div>
  );
};

export default AddChatPage;
