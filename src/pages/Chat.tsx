import { MessagesList } from '../components/MessagesList';
import { MessageSubmit } from '../components/MessageSubmit';
import { Container } from '../styles/Chat';

export const Chat = () => {
  return (
    <Container>
      <MessagesList />
      <MessageSubmit />
    </Container>
  );
};
