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

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 3rem;
  width: 18rem;

  border: 3px solid black;
  border-radius: 1.5rem;
  padding: 0 1rem;

  font-size: 1.1rem;

  background-color: white;

  & + input {
    margin-top: 0.5rem;
  }
`;

export const SubmitButton = styled.button`
  height: 3rem;
  width: 18rem;

  border: 3px solid black;
  border-radius: 1.5rem;
  margin-top: 1.5rem;

  font-size: 1.1rem;
  font-weight: bold;

  background-color: #e56e85;
  color: white;

  &:hover:not(:disabled) {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: initial;
    filter: brightness(0.9);
    opacity: 0.75;
  }
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
