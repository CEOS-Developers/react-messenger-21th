import TopBar from '@/components/TopBar';
import RcvdMessage from './components/RcvdMessage';
import SentMessage from './components/SentMessage';
import MessageInput from './components/MessageInput';

export default function ChatRoom() {
	return (
		<div className="relative flex-grow flex flex-col bg-black-200">
			<TopBar content="임이솔, 김진현 외 2명" onClickContent={() => console.log('')} />
			<div className="flex flex-col h-[38.5rem] overflow-y-scroll px-5" style={{ scrollbarWidth: 'none' }}>
				<RcvdMessage />
				<SentMessage />
			</div>
			<MessageInput />
		</div>
	);
}
