import { FormEvent, useCallback, useEffect, useState } from 'react';
import useSocket from '../hooks/useSocket';

import { CakeCounter } from '..//eastereggs/CakeCounter';
import { CakeAchievement } from '../eastereggs/CakeAchievement';

import {
  Container,
  Input,
  SubmitButton,
  CakeCounterBtn,
  Logo,
} from '../styles/Login';

import LogoImg from '../assets/logo.svg';

interface ILogin {
  handleLogin: () => void;
}

export const Login = ({ handleLogin }: ILogin) => {
  const { socket } = useSocket();
  const [username, setUsername] = useState('');
  const [roomname, setRoomname] = useState('');
  const [cakeCounter, setCakeCounter] = useState(0);
  const [isCakeCounterDisabled, setIsCakeCounterDisabled] = useState(false);

  const handleMessage = useCallback(
    (username: string, roomname: string, event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!!Object.keys(socket).length) {
        try {
          socket.emit('joinRoom', { username, roomname });
          handleLogin();
        } catch (err) {
          console.log(err);
        }
      }
    },
    [handleLogin, socket]
  );

  const handleCakeCounterSum = useCallback(() => {
    setCakeCounter(cakeCounter + 1);
  }, [cakeCounter]);

  useEffect(() => {
    if (cakeCounter >= 19) {
      setIsCakeCounterDisabled(true);
    }
  }, [cakeCounter]);

  return (
    <Container onSubmit={(e) => handleMessage(username, roomname, e)}>
      <CakeCounterBtn
        onClick={handleCakeCounterSum}
        disabled={isCakeCounterDisabled}
      >
        <Logo src={LogoImg} />
      </CakeCounterBtn>

      <Input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        placeholder='username'
      />
      <Input
        onChange={(e) => setRoomname(e.target.value)}
        value={roomname}
        placeholder='roomname'
      />
      <SubmitButton type='submit' disabled={!Object.keys(socket).length}>
        {!!Object.keys(socket).length ? 'Connect' : 'Waiting connect'}
      </SubmitButton>

      {cakeCounter > 0 && cakeCounter < 19 && (
        <CakeCounter cakeCounter={cakeCounter} />
      )}

      <CakeAchievement cakeCounter={cakeCounter} />
    </Container>
  );
};
