import { createContext, useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface ISocketContext {
  socket: Socket;
}

const SocketContext = createContext<ISocketContext>({} as ISocketContext);

export const SocketProvider: React.FC = ({ children }) => {
  const [socket, setSocket] = useState({} as Socket);

  useEffect(() => {
    const newSocket = io(`https://cakey-api.herokuapp.com`);

    newSocket.on('connect', () => {
      setSocket(newSocket);
    });

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContext;
