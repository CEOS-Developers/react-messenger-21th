// src/components/shared/BottomNavigation.tsx
import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import BFriendNotSelected from '/public/assets/icons/BFriendNotSelected.svg?react';
import BChatsNotSelected from '/public/assets/icons/BChatsNotSelected.svg?react';
import BOpenChatNotSelected from '/public/assets/icons/BOpenChatNotSelected.svg?react';
import BShoppingNotSelected from '/public/assets/icons/BShoppingNotSelected.svg?react';
import BPlusNotSelected from '/public/assets/icons/BPlusNotSelected.svg?react';

import BFriendSelected from '/public/assets/icons/BFriendSelected.svg?react';
import BChatsSelected from '/public/assets/icons/BChatsSelected.svg?react';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <NavBar>
      <NavIcon
        onClick={() => navigate('/friends')}
        selected={location.pathname === '/friends'}
      >
        {location.pathname === '/friends' ? (
          <BFriendSelected />
        ) : (
          <BFriendNotSelected />
        )}
      </NavIcon>
      <NavIcon
        onClick={() => navigate('/chat-rooms')}
        selected={location.pathname === '/chat-rooms'}
      >
        {location.pathname === '/chat-rooms' ? (
          <BChatsNotSelected />
        ) : (
          <BChatsSelected />
        )}
      </NavIcon>
      <NavIcon selected={location.pathname === '/openchat'}>
        <BOpenChatNotSelected />
      </NavIcon>
      <NavIcon selected={location.pathname === '/shop'}>
        <BShoppingNotSelected />
      </NavIcon>
      <NavIcon selected={location.pathname === '/more'}>
        <BPlusNotSelected />
      </NavIcon>
    </NavBar>
  );
};

export default BottomNav;

// 스타일
const NavBar = styled.div``;

const NavIcon = styled.button<{ selected: boolean }>``;
