import styled from 'styled-components';

export const Container = styled.div`
  max-height: 50rem;
  height: 70vh;
  width: 100%;

  border: 5px solid black;
  border-radius: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 1rem;

  background-color: white;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0;

  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-track {
    margin: 0.2rem 0;

    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;

    background: #e56e85;
  }
`;
