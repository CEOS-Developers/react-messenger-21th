import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ChatRoom from './pages/ChatRoom';
import Frame from './components/Frame';

import '@/styles/global.css';

function App() {
	return (
		<Frame>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ChatRoom />} />
				</Routes>
			</BrowserRouter>
		</Frame>
	);
}

export default App;
