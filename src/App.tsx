import { Route, Routes } from 'react-router';

import Layout from './layout/Layout';

import FriendPage from './pages/FriendPage/FriendPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<FriendPage />} />
      </Route>
    </Routes>
  );
}

export default App;
