import styled from 'styled-components';

interface Props {
  onSelect: (reaction: '❤️' | '🥹' | '😊' | null) => void;
}

const ReactionPopup = ({ onSelect }: Props) => {
  return (
    <PopupWrapper>
      <Emoji onClick={() => onSelect('❤️')}>❤️</Emoji>
      <Emoji onClick={() => onSelect('🥹')}>🥹</Emoji>
      <Emoji onClick={() => onSelect('😊')}>😊</Emoji>
    </PopupWrapper>
  );
};

export default ReactionPopup;

const PopupWrapper = styled.div`
  position: absolute;
  bottom: 100%; // 말풍선 위쪽에 뜨도록
  right: 0;
  margin-bottom: 8px;

  width: max-content;
  background: white;
  border-radius: 8px;
  padding: 6px 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  gap: 12px;
`;

const Emoji = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
