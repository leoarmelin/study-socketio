import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
  0% {transform: scale(0.3,0.3)}
  40% {transform: scale(1.1,1.1)}
  60% {transform: scale(0.95,0.95)}
  80% {transform: scale(1.02,1.02)}
  100% {transform: scale(1,1)}
`;

export const Container = styled.aside`
  position: fixed;
  display: flex;

  align-items: center;
  justify-content: center;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);
`;

export const AchievementMessage = styled.strong`
  padding: 0 1rem;

  font-size: 1.5rem;
  text-align: center;

  color: white;

  animation: ${zoomIn} 0.5s;

  @media (min-width: 720px) {
    font-size: 2rem;
  }
`;
