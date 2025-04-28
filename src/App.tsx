import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import { AppProvider } from '@/contexts/AppProvider';
import GlobalStyle from '@/styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <RouterProvider router={router} />
      </AppProvider>
    </>
  );
}

export default App;
