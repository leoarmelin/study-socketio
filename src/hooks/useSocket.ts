import { useContext } from 'react';
import SocketContext from '../contexts/SocketContext';

export default function useSocket() {
  const context = useContext(SocketContext);

  if (!context) {
    throw new Error('useSocket must be within a SocketProvider!');
  }

  return context;
}
