import styled from 'styled-components';

export const Container = styled.section`
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

  &:hover {
    filter: brightness(0.9);
  }
`;
