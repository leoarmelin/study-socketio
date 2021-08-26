import { format, parseISO } from 'date-fns';
import useSocket from '../../hooks/useSocket';
import { IMessage } from '../../interfaces/IMessage';
import { Container, MessageText, MessageTime } from './styles';

interface IMessageComponent {
  message: IMessage;
}

export const MessageComponent = ({ message }: IMessageComponent) => {
  const { socket } = useSocket();

  return (
    <Container
      isUser={socket.id === message.userId}
      fromServer={message.fromServer}
      userColor={message.userColor}
    >
      <MessageText>{message.text}</MessageText>

      {!message.fromServer && (
        <MessageTime>
          {format(parseISO(message.createdAt.toString()), "H':'mm")}
        </MessageTime>
      )}
    </Container>
  );
};
