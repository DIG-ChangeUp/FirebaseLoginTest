import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSetAtom } from 'jotai/index';

import { auth } from '../auth/firebase.ts';
import { UseAuthContext } from '../auth/AuthContext.tsx';
import { userEmailAtom } from '../globalState.ts';

import { Button, Center, Text, VStack } from '@yamada-ui/react';

const Home = () => {
  //ログイン時に取得したメールアドレスをユーザーデータ取得に利用
  const setEmailAddress = useSetAtom(userEmailAtom);

  const navigate = useNavigate();
  const { authUser } = UseAuthContext();

  // userが存在しない場合にリダイレクト
  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    } else {
      setEmailAddress(authUser.email);
    }
  }, [authUser, navigate]);

  //ログアウト
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.log('ログアウト エラー', error);
    }
  };

  // navigateによるリダイレクトが完了するまで何もレンダリングしない
  if (!authUser) return null;

  return (
    <Center p="10" h="100vh" minW="300px" maxW="400px" m="0 auto">
      <VStack>
        <Text fontSize="6xl" textAlign="center" mb="80px">
          Top page
        </Text>

        <Button
          h="45"
          bg="primary"
          color="#F4F4F5"
          mt="60px"
          onClick={handleLogout}
        >
          ログアウト
        </Button>
      </VStack>
    </Center>
  );
};

export default Home;
