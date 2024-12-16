import SignUp from './component/SingUp.tsx';
import { AuthProvider } from './auth/authContext.tsx';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home.tsx';
import Login from './component/Login.tsx';

function App() {
  return (
    <>
      <h1>Firebase auth sample!</h1>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/singup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
