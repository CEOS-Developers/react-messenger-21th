import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Frame from './components/Frame';
import Chats from './pages/ChatList';
import ChatRoom from './pages/ChatRoom';

import '@/styles/global.css';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
	return (
		<BrowserRouter>
			<Frame>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/chatlist" element={<Chats />} />
					<Route path="/chatroom/:chatRoomId" element={<ChatRoom />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</Frame>
		</BrowserRouter>
	);
}

export default App;
