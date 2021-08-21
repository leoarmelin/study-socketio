import { useEffect, useRef, useState } from 'react';
import useSocket from '../../hooks/useSocket';
import { IMessage } from '../../interfaces/IMessage';
import { MessageComponent } from '../Message';
import { Container, Content } from './styles';

export const MessagesList = () => {
  const { socket } = useSocket();
  const chatRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);

  useEffect(() => {
    socket.on('message', (data: IMessage) => {
      setMessages((msgs) => [...msgs, data]);

      if (chatRef.current) {
        chatRef.current.scrollTop = chatRef.current?.scrollHeight;
      }
    });
  }, [socket]);

  return (
    <Container>
      <Content ref={chatRef}>
        {messages.map((message) => (
          <MessageComponent
            key={String(Math.random() * 156165564)}
            message={message}
          />
        ))}
      </Content>
    </Container>
  );
};
