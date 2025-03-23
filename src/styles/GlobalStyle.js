import { createGlobalStyle } from 'styled-components';
import { colors } from './theme';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Noto Serif TC', serif;
    background-color: ${colors.primary};
    color: ${colors.text};
    min-height: 100vh;
    line-height: 1.6;
  }

  #root {
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${colors.primary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.accent}66;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${colors.accent}99;
  }
`; 