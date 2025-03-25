import '@/styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatRoom from './pages/ChatRoom';
import Frame from './components/Frame';

function App() {
	return (
		<Frame>
			<BrowserRouter>
				<Routes>
					<Route path="/chatroom/:chatRoomId" element={<ChatRoom />} />
				</Routes>
			</BrowserRouter>
		</Frame>
	);
}

export default App;
