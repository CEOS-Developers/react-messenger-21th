import { createContext, useContext, useState, ReactNode } from 'react'

const UserIdContext = createContext<number>(1)
const UserIdUpdateContext = createContext<(id: number) => void>(() => {})

export const UserIdProvider = ({ children }: { children: ReactNode }) => {
  const [userId, setUserId] = useState<number>(1)

  return (
    <UserIdContext.Provider value={userId}>
      <UserIdUpdateContext.Provider value={setUserId}>
        {children}
      </UserIdUpdateContext.Provider>
    </UserIdContext.Provider>
  )
}

export const useUserId = () => useContext(UserIdContext)
export const useSetUserId = () => useContext(UserIdUpdateContext)
