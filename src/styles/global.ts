import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    
    font-family: 'Montserrat';

    box-sizing: border-box;
    outline: none;
  }

  button, input {
    font-weight: normal;
  }

  button {
    cursor: pointer;
  }
`;
