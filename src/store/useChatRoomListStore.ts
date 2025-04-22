import { MessageDto } from '@/apis/dto';
import { ChatRoomDto } from '@/apis/dto';
import { getChatRoomList } from '@/apis/getChatRoomList';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChatRoomLisStore {
	chatRoomList: ChatRoomDto[];
	initChatRoomList: () => void;
	setChatRoomList: (chatRoomId: number, message: MessageDto) => void;
}

export const useChatRoomLisStore = create<ChatRoomLisStore>()(
	persist(
		(set) => ({
			chatRoomList: [],
			initChatRoomList: () => set({ chatRoomList: getChatRoomList() }),
			setChatRoomList: (chatRoomId, message) =>
				set((state) => {
					const updatedChatRoomList = state.chatRoomList.map((chatRoom) =>
						chatRoom.chatRoomId === chatRoomId ? { ...chatRoom, latestMessage: message } : chatRoom,
					);
					const sortedChatRoomList = updatedChatRoomList.sort(
						(a, b) => new Date(b.latestMessage.createdAt).getTime() - new Date(a.latestMessage.createdAt).getTime(),
					);

					return {
						chatRoomList: sortedChatRoomList,
					};
				}),
		}),
		{
			name: 'chatRoomList',
			partialize: (state) => ({ chatRoomList: state.chatRoomList }),
		},
	),
);
