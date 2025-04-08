import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Frame from './components/Frame';
import ChatList from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';

import '@/styles/global.css';

function App() {
	return (
		<BrowserRouter>
			<Frame>
				<Routes>
					<Route path="/chatlist" element={<ChatList />} />
					<Route path="/chatroom/:chatRoomId" element={<ChatRoom />} />
				</Routes>
			</Frame>
		</BrowserRouter>
	);
}

export default App;
