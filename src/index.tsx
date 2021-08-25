import React from 'react';
import ReactDOM from 'react-dom';
import { SocketProvider } from './contexts/SocketContext';
import { Router } from './routes';
import { GlobalStyles } from './styles/global';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <GlobalStyles />
      <Router />
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
