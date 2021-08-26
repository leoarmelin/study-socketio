import styled, { css } from 'styled-components';

interface IContainer {
  isUser: boolean;
  fromServer: boolean;
  userColor: string;
}

export const Container = styled.div<IContainer>`
  position: relative;

  height: fit-content;

  border-radius: 0.75rem;
  margin-left: ${({ isUser }) => (isUser ? 'auto' : 0)};

  word-wrap: break-word;

  ${({ fromServer, isUser, userColor }) =>
    fromServer
      ? css`
          width: fit-content;
          margin: 0 auto;
          padding: 0.25rem;
          text-align: center;
          background-color: transparent;
        `
      : css`
          width: 70%;
          padding: 1rem;
          background-color: ${isUser ? '#E2C0FF' : userColor};
        `}
`;

export const MessageText = styled.p`
  font-size: 1rem;
`;

export const MessageTime = styled.span`
  position: absolute;

  bottom: 5px;
  right: 10px;

  font-size: 0.75rem;
`;
