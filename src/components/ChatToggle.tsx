import { useState } from "react";
import styled from "styled-components";

const ChatToggle = () => {
  const [activeTab, setActiveTab] = useState<"personal" | "group">("personal");
  return (
    <>
      <ToggleContainer>
        <Slider active={activeTab} />
        <ToggleButton
          onClick={() => setActiveTab("personal")}
          active={activeTab === "personal"}
        >
          개인 채팅
        </ToggleButton>
        <ToggleButton
          onClick={() => setActiveTab("group")}
          active={activeTab === "group"}
        >
          그룹 채팅
        </ToggleButton>
      </ToggleContainer>
    </>
  );
};
export default ChatToggle;
const Slider = styled.div<{ active: string }>`
  position: absolute;
  width: calc(50% - 4px);
  height: 38px;
  background-color: #ffffff;
  border: 1px solid #6a00ff;
  border-radius: 100px;
  transition: transform 0.2s ease;
  z-index: 1;
  left: 2px;
  top: 2px;
  transform: ${({ active }) =>
    active === "group" ? "translateX(102%)" : "translateX(0)"};
`;
const ToggleContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 343px;
  height: 42px;
  background: #f5f7fa;
  border-radius: 24px;
  margin-top: 8px;
  padding: 2px;
  margin-bottom: 21.5px;
`;
const ToggleButton = styled.button<{ active?: boolean }>`
  flex: 1;
  z-index: 2;
  border: none;
  background: transparent;
  font-size: 14px;
  font-weight: 600;
  color: ${({ active }) => (active ? "#6a00ff" : "#676773")};
  border-radius: 100px;
  cursor: pointer;
`;
