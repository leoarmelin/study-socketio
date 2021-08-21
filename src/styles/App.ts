import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }

  70% { transform: translate(3px, 2px) rotate(0deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-color: #fff8cb;
`;

export const Logo = styled.img`
  height: 10rem;
  width: 10rem;

  &:hover {
    animation: ${shake} 1.5s;
    animation-iteration-count: infinite;
  }
`;

export const CakeCounterBtn = styled.button`
  border: none;
  margin-bottom: 1rem;

  background-color: transparent;

  &:hover {
    cursor: inherit;
  }
`;
