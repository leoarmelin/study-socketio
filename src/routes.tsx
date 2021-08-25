import { useCallback, useState } from 'react';
import { Login } from './pages/Login';
import { SocketProvider } from './contexts/SocketContext';
import { Chat } from './pages/Chat';

import { Container } from './styles/Router';

export const Router = () => {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = useCallback(() => {
    setIsLogged(true);
  }, []);

  return (
    <SocketProvider>
      <Container>
        {isLogged ? <Chat /> : <Login handleLogin={handleLogin} />}
      </Container>
    </SocketProvider>
  );
};
