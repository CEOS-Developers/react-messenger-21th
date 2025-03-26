const BottomMenu = () => {
  return (
    <div className="w-full h-[86px] fixed bottom-0 px-[12px] shadow-bottommenu">
      <div className="flex">
        <button>홈</button>
        <button>채팅</button>
        <button>설정</button>
      </div>
    </div>
  );
};

export default BottomMenu;
