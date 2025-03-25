import '@/styles/global.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChatRoom from './pages/ChatRoom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/chatroom/:chatRoomId" element={<ChatRoom />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
