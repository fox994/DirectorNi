import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { globalMixins, colors, typography } from './styles/theme';
import Home from './components/Home';
import ChapterView from './components/ChapterView';
import Chapter2 from './chapters/Chapter2';
import Chapter3 from './chapters/Chapter3';
import useSound from 'use-sound';
import bgMusic from './assets/audio/background.mp3';
import Ending from './components/Ending';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;700&family=Playfair+Display:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${globalMixins}

  #root {
    min-height: 100vh;
    background: ${colors.primary};
    padding: 20px;
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

const theme = {
  colors,
  typography
};

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #e0e0e0;
  font-family: 'Times New Roman', serif;
`;

const SoundToggle = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  background: transparent;
  border: 1px solid #e0e0e0;
  color: #e0e0e0;
  padding: 12px 24px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  z-index: 1000;
  min-width: 100px;
  text-align: center;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  &:hover {
    background: #e0e0e0;
    color: #1a1a1a;
  }

  &:active {
    transform: scale(0.95);
    background: #e0e0e0;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    padding: 15px 30px;
    font-size: 1.1em;
    min-width: 120px;
    top: 15px;
    right: 15px;
  }
`;

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [play, { stop }] = useSound(bgMusic, { loop: true });

  const toggleMusic = () => {
    if (isMusicPlaying) {
      stop();
    } else {
      play();
    }
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <SoundToggle onClick={toggleMusic}>
            {isMusicPlaying ? '音樂 關' : '音樂 開'}
          </SoundToggle>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/2" element={<Chapter2 />} />
            <Route path="/chapter/3" element={<Chapter3 />} />
            <Route path="/chapter/:chapterId" element={<ChapterView />} />
            <Route path="/ending" element={<Ending />} />
          </Routes>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
