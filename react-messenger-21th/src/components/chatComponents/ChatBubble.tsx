import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addReaction } from '../states/chatSlice';
import { useParams } from 'react-router-dom';

import * as s from '../styles/ChatBubbleStyles';

import ReactionPopup from './ReactionPopup';

interface ChatBubbleProps {
  messageId: string;
  image?: string;
  userName?: string;
  text: string;
  isMine: boolean;
  timestamp: string;
  showProfile: boolean;
  showTimestamp: boolean;
  reaction?: '❤️' | '🥹' | '😊' | null;
}

const ChatBubble = ({
  messageId,
  image,
  userName,
  text,
  isMine,
  timestamp,
  showProfile,
  showTimestamp,
  reaction,
}: ChatBubbleProps) => {
  const dispatch = useDispatch();
  const { roomId } = useParams();
  const [showReactionPopup, setShowReactionPopup] = useState(false);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleTouchStart = () => {
    longPressTimer.current = setTimeout(() => {
      setShowReactionPopup(true);
    }, 500);
  };

  const handleTouchEnd = () => {
    if (longPressTimer.current) clearTimeout(longPressTimer.current);
  };

  const handleReactionSelect = (selected: '❤️' | '🥹' | '😊' | null) => {
    dispatch(addReaction({ roomId: roomId!, messageId, reaction: selected }));
    setShowReactionPopup(false);
  };

  return (
    <s.BubbleRow
      isMine={isMine}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart} // PC용
      onMouseUp={handleTouchEnd}
    >
      <s.ProfileColumn>
        {!isMine && showProfile && <s.ProfileImage src={image} alt="profile" />}
      </s.ProfileColumn>

      <s.MessageWrapper isMine={isMine}>
        <s.MessageBlock isMine={isMine}>
          {!isMine && showProfile && <s.UserName>{userName}</s.UserName>}
          <div style={{ position: 'relative' }}>
            <s.Bubble isMine={isMine}>{text}</s.Bubble>
            {reaction && (
              <s.ReactionEmoji isMine={isMine}>{reaction}</s.ReactionEmoji>
            )}
            {showReactionPopup && (
              <ReactionPopup onSelect={handleReactionSelect} />
            )}
          </div>
        </s.MessageBlock>

        {showTimestamp && (
          <s.Timestamp isMine={isMine}>
            {new Date(timestamp).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </s.Timestamp>
        )}
      </s.MessageWrapper>
    </s.BubbleRow>
  );
};

export default ChatBubble;
