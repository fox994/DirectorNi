import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ChapterContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const ChapterTitle = styled.h1`
  font-size: 2em;
  color: #e0e0e0;
  text-align: center;
  margin-bottom: 30px;
  position: relative;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 60px;
    height: 2px;
    background: #88ff88;
  }

  &::before {
    left: -80px;
  }

  &::after {
    right: -80px;
  }
`;

export const Content = styled.div`
  font-size: 1.2em;
  line-height: 1.6;
  color: #e0e0e0;
  margin-bottom: 40px;
  padding: 20px;
  background: rgba(26, 26, 26, 0.6);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const NavButton = styled.button`
  padding: 12px 24px;
  background: #2a2a2a;
  color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.1em;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &:hover {
    background: #88ff88;
    transform: translateY(-2px);
  }
`;

export const PhilosophyExplanation = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: rgba(26, 26, 26, 0.6);
  border-radius: 8px;
  color: #b0b0b0;
  font-style: italic;
  line-height: 1.8;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);

  &::before {
    content: '"';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 3em;
    color: rgba(136, 255, 136, 0.2);
  }

  &::after {
    content: '"';
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 3em;
    color: rgba(136, 255, 136, 0.2);
  }
`; 