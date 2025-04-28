// src/components/shared/BottomNavigation.tsx
import { useNavigate, useLocation } from 'react-router-dom';

import * as s from '../styles/BottomNavStyles';

import BFriendNotSelected from '/public/assets/icons/BFriendNotSelected.svg?react';
import BChatsNotSelected from '/public/assets/icons/BChatsNotSelected.svg?react';
import BOpenChatNotSelected from '/public/assets/icons/BOpenChatNotSelected.svg?react';
import BShoppingNotSelected from '/public/assets/icons/BShoppingNotSelected.svg?react';
import BPlusNotSelected from '/public/assets/icons/BPlusNotSelected.svg?react';
import BFriendSelected from '/public/assets/icons/BFriendSelected.svg?react';
import BChatsSelected from '/public/assets/icons/BChatsSelected.svg?react';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <s.NavBar>
      <s.NavIcon
        onClick={() => navigate('/friends')}
        selected={location.pathname === '/friends'}
      >
        {location.pathname === '/friends' ? (
          <BFriendSelected width="67px" height="48px" />
        ) : (
          <BFriendNotSelected width="67px" height="48px" />
        )}
      </s.NavIcon>
      <s.NavIcon
        onClick={() => navigate('/chat-rooms')}
        selected={location.pathname === '/chat-rooms'}
      >
        {location.pathname === '/chat-rooms' ? (
          <BChatsSelected width="67px" height="48px" />
        ) : (
          <BChatsNotSelected width="67px" height="48px" />
        )}
      </s.NavIcon>
      <s.NavIcon selected={location.pathname === '/openchat'}>
        <BOpenChatNotSelected width="67px" height="48px" />
      </s.NavIcon>
      <s.NavIcon selected={location.pathname === '/shop'}>
        <BShoppingNotSelected width="67px" height="48px" />
      </s.NavIcon>
      <s.NavIcon selected={location.pathname === '/more'}>
        <BPlusNotSelected width="67px" height="48px" />
      </s.NavIcon>
    </s.NavBar>
  );
};

export default BottomNav;
