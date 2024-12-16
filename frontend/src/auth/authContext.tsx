import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { auth } from './firebase';
import { User as FirebaseUser } from 'firebase/auth'; // Firebase の User 型をインポート

interface AuthContextType {
  user: FirebaseUser | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuthContext(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext undefined!');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    // Firebase Auth の状態変化を監視
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    // クリーンアップ関数を返す
    return () => {
      unsubscribe();
    };
  }, []);

  const value: AuthContextType = {
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
