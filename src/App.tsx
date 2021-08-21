import { useCallback, useState } from 'react';

import useSocket from './hooks/useSocket';

import { Login } from './pages/Login';
import { Chat } from './pages/Chat';

import LogoImg from './assets/logo.svg';

import { CakeCounterBtn, Container, Logo } from './styles/App';
import { GlobalStyles } from './styles/global';
import { CakeCounter } from './eastereggs/CakeCounter';
import { CakeAchievement } from './eastereggs/CakeAchievement';
import { useEffect } from 'react';

function App() {
  const { socket } = useSocket();
  const [cakeCounter, setCakeCounter] = useState(0);
  const [isCakeCounterDisabled, setIsCakeCounterDisabled] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = useCallback(() => {
    setIsLogged(true);
  }, []);

  const handleCakeCounterSum = useCallback(() => {
    setCakeCounter(cakeCounter + 1);
  }, [cakeCounter]);

  useEffect(() => {
    if (cakeCounter >= 19) {
      setIsCakeCounterDisabled(true);
    }
  }, [cakeCounter]);

  if (socket && Object.keys(socket).length === 0) return <></>;

  return (
    <>
      <GlobalStyles />
      <Container>
        {isLogged ? (
          <Chat />
        ) : (
          <>
            <CakeCounterBtn
              onClick={handleCakeCounterSum}
              disabled={isCakeCounterDisabled}
            >
              <Logo src={LogoImg} />
            </CakeCounterBtn>

            <Login handleLogin={handleLogin} />

            {cakeCounter > 0 && cakeCounter < 19 && (
              <CakeCounter cakeCounter={cakeCounter} />
            )}

            <CakeAchievement cakeCounter={cakeCounter} />
          </>
        )}
      </Container>
    </>
  );
}

export default App;
