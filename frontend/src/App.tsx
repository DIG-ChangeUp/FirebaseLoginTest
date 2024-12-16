import SignUp from './component/SingUp.tsx';
import { AuthProvider } from './auth/authContext.tsx';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Firebase auth sample!</h1>
      <AuthProvider>
        <Routes>
          <Route path="/singup" element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
