import React, { useState, useEffect } from 'react';
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

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(224, 224, 224, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(224, 224, 224, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(224, 224, 224, 0);
  }
`;

const Container = styled.div`
  margin: 20px 0;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
  text-align: center;
`;

const Prompt = styled.div`
  font-size: 1.3em;
  color: #e0e0e0;
  margin-bottom: 20px;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ActionButton = styled.button`
  display: inline-block;
  padding: 25px 50px;
  background: rgba(224, 224, 224, 0.1);
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  color: #e0e0e0;
  font-size: 1.5em;
  margin: 20px;
  cursor: pointer;
  animation: ${pulse} 1s infinite;
  transition: all 0.3s ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(224, 224, 224, 0.2);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
    background: rgba(224, 224, 224, 0.3);
  }
`;

const Timer = styled.div`
  width: ${props => props.progress}%;
  height: 6px;
  background: ${props => {
    if (props.progress > 60) return '#88ff88';
    if (props.progress > 30) return '#ffff88';
    return '#ff8888';
  }};
  transition: width 0.1s linear, background 0.3s ease;
  margin-top: 20px;
  border-radius: 3px;
`;

const Result = styled.div`
  margin-top: 20px;
  color: ${props => props.success ? '#88ff88' : '#ff4444'};
  font-size: 1.4em;
  font-weight: bold;
  animation: ${fadeIn} 0.5s ease-out;
`;

const QuickTimeEvent = ({ prompt, timeLimit = 3000, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isActive, setIsActive] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 100) {
          setIsActive(false);
          setResult(false);
          onComplete(false);
          clearInterval(timer);
          return 0;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [isActive, onComplete]);

  const handleClick = () => {
    if (!isActive) return;
    
    setResult(true);
    setIsActive(false);
    onComplete(true);
  };

  const progress = (timeLeft / timeLimit) * 100;

  return (
    <Container>
      <Prompt>{prompt}</Prompt>
      {isActive && (
        <>
          <ActionButton onClick={handleClick}>
            點擊！
          </ActionButton>
          <Timer progress={progress} />
        </>
      )}
      {result !== null && (
        <Result success={result}>
          {result ? '成功！準備下一個挑戰...' : '失敗...'}
        </Result>
      )}
    </Container>
  );
};

export default QuickTimeEvent;