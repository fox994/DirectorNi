import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const Description = styled.p`
  color: #ddd;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const PasswordDisplay = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #fff;
  letter-spacing: 0.5rem;
  min-width: 200px;
  text-align: center;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
`;

const NumberButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background: ${props => props.isSelected ? '#4ECDC4' : 'rgba(255, 255, 255, 0.1)'};
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.1);
    background: ${props => props.isSelected ? '#4ECDC4' : 'rgba(255, 255, 255, 0.2)'};
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 1.2rem;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  background: ${props => props.variant === 'clear' ? 'rgba(255, 255, 255, 0.1)' : '#4ECDC4'};
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FeedbackMessage = styled.div`
  color: #fff;
  text-align: center;
  margin-top: 1rem;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PasswordGame = ({ onComplete }) => {
  const [password] = useState('316');
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);

  const handleNumberClick = (number) => {
    if (selectedNumbers.length >= 3 || isGameComplete) return;
    
    const newSelectedNumbers = [...selectedNumbers, number];
    setSelectedNumbers(newSelectedNumbers);

    if (newSelectedNumbers.length === 3) {
      const guess = newSelectedNumbers.join('');
      if (guess === password) {
        setFeedback('密碼正確！');
        setShowFeedback(true);
        setIsGameComplete(true);
        setTimeout(() => {
          onComplete();
        }, 2000);
      } else {
        setFeedback('密碼錯誤，請重試');
        setShowFeedback(true);
        setTimeout(() => {
          setSelectedNumbers([]);
          setShowFeedback(false);
        }, 1500);
      }
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setShowFeedback(false);
  };

  const handleDelete = () => {
    if (selectedNumbers.length > 0) {
      setSelectedNumbers(prev => prev.slice(0, -1));
      setShowFeedback(false);
    }
  };

  return (
    <GameContainer>
      <Title>密碼遊戲</Title>
      <Description>
        請輸入正確的3位數密碼。
        每個數字只能使用一次。
      </Description>
      <PasswordDisplay>
        {Array(3).fill('').map((_, index) => (
          <span key={index}>
            {selectedNumbers[index] || '_'}
          </span>
        ))}
      </PasswordDisplay>
      <NumberGrid>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <NumberButton
            key={number}
            onClick={() => handleNumberClick(number)}
            isSelected={selectedNumbers.includes(number)}
          >
            {number}
          </NumberButton>
        ))}
      </NumberGrid>
      <ActionButtons>
        <ActionButton onClick={handleClear} variant="clear">
          清除
        </ActionButton>
        <ActionButton onClick={handleDelete} variant="clear">
          刪除
        </ActionButton>
      </ActionButtons>
      <FeedbackMessage className={showFeedback ? 'show' : ''}>
        {feedback}
      </FeedbackMessage>
    </GameContainer>
  );
};

export default PasswordGame; 