import styled from 'styled-components';
import { IoSend } from 'react-icons/io5';

export const Container = styled.form`
  display: flex;
  position: relative;

  height: 3rem;
  width: 100%;

  border: 3px solid black;
  border-radius: 1.5rem;

  background-color: white;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;

  border: none;
  padding: 0 3rem 0 1rem;

  font-size: 1.1rem;

  background-color: transparent;
`;

export const SubmitButton = styled.button`
  display: flex;
  position: absolute;

  right: -3px;
  top: -1.5px;

  align-items: center;
  justify-content: center;

  height: calc(3rem - 3px);
  width: calc(3rem - 3px);

  border: 3px solid black;
  border-radius: 1.5rem;

  background-color: #ff7a95;
`;

export const SubmitIcon = styled(IoSend)`
  height: 1.25rem;
  width: 1.25rem;

  margin-left: 3px;

  color: white;
`;
