import * as Types from '@/types';
import { loadData, saveData } from '@/services/localStorage';
import generateId from './generateId';

// Built-in type
type GroupedMessagesByUser = {
  senderId: string;
  messages: Types.Message[];
};

function groupMessagesByDate(messages: Types.Message[]): Record<string, Types.Message[]> {
  const grouped: Record<string, Types.Message[]> = {};

  messages.forEach((msg) => {
    const dateStr = new Date(msg.timestamp).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });

    if (!grouped[dateStr]) grouped[dateStr] = [];

    grouped[dateStr].push(msg);
  });

  return grouped;
}

function groupMessagesByConsecutiveUser(messages: Types.Message[]): GroupedMessagesByUser[] {
  const grouped: GroupedMessagesByUser[] = [];

  messages.forEach((msg) => {
    const lastGroup = grouped.at(-1);

    if (lastGroup && lastGroup.senderId === msg.senderId) {
      lastGroup.messages.push(msg);
    } else {
      grouped.push({
        senderId: msg.senderId,
        messages: [msg],
      });
    }
  });

  return grouped;
}

function formatTime(timestamp: number): string {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const isAM = hours < 12;
  const formattedHour = hours % 12 === 0 ? 12 : hours % 12;

  return `${isAM ? '오전' : '오후'} ${formattedHour}:${minutes}`;
}

function onSend(chatId: string, senderId: string, text: string): Types.ChatRoom | null {
  const allData: Types.ChatList = loadData();
  const room = allData[chatId];
  if (!room) return null;

  const newMessage: Types.Message = {
    id: generateId(),
    senderId: senderId,
    text: text,
    timestamp: Date.now(),
  };

  const updatedRoom: Types.ChatRoom = {
    ...room,
    messages: [...room.messages, newMessage],
    lastReadMessageId: newMessage.id,
  };

  allData[chatId] = updatedRoom;
  saveData(allData);

  return updatedRoom;
}

export { groupMessagesByDate, groupMessagesByConsecutiveUser, formatTime, onSend };
