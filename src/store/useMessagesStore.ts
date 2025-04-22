import { MessageDto } from '@/apis/dto';
import { createMessagesByUsers } from '@/utils/createMessagesByUsers';
import { messagesByUserDto } from '@/utils/dto';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface MessagesStore {
	messages: MessageDto[];
	getMessagesByUsers: () => messagesByUserDto[];
	initMessages: (messages: MessageDto[]) => void;
	sendMessage: (message: MessageDto) => void;
}

export const useMessagesStore = create<MessagesStore>()(
	persist(
		(set, get) => ({
			messages: [],
			getMessagesByUsers: () => createMessagesByUsers(get().messages),
			initMessages: (messages) => set({ messages }),
			sendMessage: (message) =>
				set((state) => ({
					messages: [...state.messages, message],
				})),
		}),
		{
			name: 'messages',
			partialize: (state) => ({ messages: state.messages }),
		},
	),
);
