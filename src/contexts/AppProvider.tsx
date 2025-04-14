import { ChatListProvider, MyIdProvider, UserListProvider } from './localStorage';

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <MyIdProvider>
      <UserListProvider>
        <ChatListProvider>{children}</ChatListProvider>
      </UserListProvider>
    </MyIdProvider>
  );
}

export { AppProvider };
