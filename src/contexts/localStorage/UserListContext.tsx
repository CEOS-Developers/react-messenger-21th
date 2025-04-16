import React, { createContext, useContext, useEffect, useState } from 'react';
import * as Types from '@/types';
import initialData from '@/assets/data/userList.json';
import { toggleFavorite } from '@/utils';
import { loadUserList, saveUserList } from '@/services/localStorage';

type UserListContextType = {
  userList: Types.UserList;
  setUserList: (updated: Types.UserList) => void;
  onToggleFavorite: (userId: string) => void;
};

const UserListContext = createContext<UserListContextType | null>(null);

function UserListProvider({ children }: { children: React.ReactNode }) {
  const [userList, setUserList] = useState<Types.UserList>({});

  useEffect(() => {
    const loaded = loadUserList();

    if (!loaded || Object.keys(loaded).length === 0) {
      setUserList(initialData);
      saveUserList(initialData);
    } else {
      setUserList(loaded);
    }
  }, []);

  const update = (updated: Types.UserList) => {
    setUserList(updated);
    saveUserList(updated);
  };

  // favorite
  const onToggleFavorite = (userId: string) => {
    const updated = toggleFavorite(userId, userList);
    update(updated);
  };

  return (
    <UserListContext.Provider value={{ userList, setUserList: update, onToggleFavorite }}>
      {children}
    </UserListContext.Provider>
  );
}

function useUserList() {
  const context = useContext(UserListContext);
  if (!context) throw new Error('Unvalid UserListContext!');
  return context;
}

export { UserListProvider, useUserList };
