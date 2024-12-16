import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../auth/authContext.tsx';
import { useEffect } from 'react';

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.log('ログアウト エラー');
    }
  };

  // userが存在しない場合にリダイレクト
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]); // user または navigate が変更された場合にのみ実行

  if (!user) {
    // navigateによるリダイレクトが完了するまで何もレンダリングしない
    return null;
  }

  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;
