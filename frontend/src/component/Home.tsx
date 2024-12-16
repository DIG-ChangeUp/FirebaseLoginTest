import { auth } from '../auth/firebase';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../auth/authContext.tsx';

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

  if (!user) {
    navigate('/login'); // userが存在しない場合にリダイレクト
    return null; // リダイレクト後に不要なコンテンツをレンダリングしない
  }

  return (
    <div>
      <h1>ホームページ</h1>
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Home;
