import { FormEvent, useCallback } from 'react';
import { useState } from 'react';
import useSocket from '../../hooks/useSocket';
import { Container, Input, SubmitButton, SubmitIcon } from './styles';

export const MessageSubmit = () => {
  const { socket } = useSocket();
  const [text, setText] = useState('');

  const handleSendMessage = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (text.length) {
        socket.emit('chat', text);
        setText('');
      }
    },
    [socket, text]
  );

  return (
    <Container onSubmit={(e) => handleSendMessage(e)}>
      <Input
        placeholder='Write something cool'
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <SubmitButton type='submit'>
        <SubmitIcon />
      </SubmitButton>
    </Container>
  );
};
