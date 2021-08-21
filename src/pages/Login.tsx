import { useCallback, useState } from 'react';
import useSocket from '../hooks/useSocket';
import { Container, Input, SubmitButton } from '../styles/Login';

interface ILogin {
  handleLogin: () => void;
}

export const Login = ({ handleLogin }: ILogin) => {
  const { socket } = useSocket();
  const [username, setUsername] = useState('');
  const [roomname, setRoomname] = useState('');

  const handleMessage = useCallback(
    (username, roomname) => {
      if (socket) {
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

  return (
    <Container>
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
      <SubmitButton onClick={() => handleMessage(username, roomname)}>
        Connect
      </SubmitButton>
    </Container>
  );
};
