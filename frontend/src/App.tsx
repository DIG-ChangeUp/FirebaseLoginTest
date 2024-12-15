import SignUp from './component/SingUp.tsx';
import { AuthProvider } from './auth/authContext.tsx';

function App() {
  return (
    <>
      <h1>Firebase auth sample!</h1>
      <AuthProvider>
        <SignUp />
      </AuthProvider>
    </>
  );
}

export default App;
