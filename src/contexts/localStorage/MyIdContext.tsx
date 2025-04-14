import React, { createContext, useContext, useEffect, useState } from 'react';
import initialData from '@/assets/data/myId.json';
import { loadMyId, saveMyId } from '@/services/localStorage';

type MyIdContextType = {
  myId: string;
  setMyId: (updated: string) => void;
};

const MyIdContext = createContext<MyIdContextType | null>(null);

function MyIdProvider({ children }: { children: React.ReactNode }) {
  const [myId, setMyId] = useState<string>('');

  useEffect(() => {
    const loaded = loadMyId();

    if (!loaded) {
      setMyId(initialData);
      saveMyId(initialData);
    } else {
      setMyId(loaded);
    }
  }, []);

  const update = (updated: string) => {
    setMyId(updated);
    saveMyId(updated);
  };

  return <MyIdContext.Provider value={{ myId, setMyId: update }}>{children}</MyIdContext.Provider>;
}

function useMyId() {
  const context = useContext(MyIdContext);
  if (!context) throw new Error('Unvalid MyIdContext!');
  return context;
}

export { MyIdProvider, useMyId };
