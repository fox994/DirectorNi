import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h2`
  color: #ffffff;
  margin-bottom: 1rem;
  font-size: 2rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const Description = styled.p`
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.6;
  font-size: 1.1rem;
  font-weight: 500;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const GameArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
  perspective: 1000px;
`;

const ShapeCard = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'none'};
  
  &:hover {
    animation: ${pulse} 0.5s ease-in-out;
  }
`;

const ShapeFront = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ecf0f1;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 2rem;
  color: #2c3e50;
  transition: all 0.3s ease;
  
  &:hover {
    background: #bdc3c7;
  }
`;

const ShapeBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.color || '#3498db'};
  border-radius: 15px;
  transform: rotateY(180deg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: #ecf0f1;
  border-radius: 5px;
  margin: 1rem 0;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => (props.progress / 3) * 100}%;
  height: 100%;
  background: linear-gradient(90deg, #3498db, #2ecc71);
  transition: width 0.3s ease;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: linear-gradient(135deg, #3498db, #2ecc71);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 0.5rem;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: #bdc3c7;
    cursor: not-allowed;
    transform: none;
  }
`;

const FeedbackMessage = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: ${props => props.success ? '#2ecc71' : '#e74c3c'};
  color: white;
  text-align: center;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
`;

const MemoryGame = ({ onComplete }) => {
  const [shapes, setShapes] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);

  const shapeTypes = [
    { id: 1, name: 'circle', color: '#e74c3c' },
    { id: 2, name: 'square', color: '#3498db' },
    { id: 3, name: 'triangle', color: '#2ecc71' },
    { id: 4, name: 'star', color: '#f1c40f' },
    { id: 5, name: 'heart', color: '#e84393' },
    { id: 6, name: 'diamond', color: '#9b59b6' }
  ];

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleGameOver();
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, timeLeft]);

  const initializeGame = () => {
    const selectedShapes = [...shapeTypes].sort(() => Math.random() - 0.5).slice(0, 3);
    const gameShapes = [...selectedShapes, ...selectedShapes]
      .sort(() => Math.random() - 0.5)
      .map((shape, index) => ({ ...shape, id: index + 1 }));
    
    setShapes(gameShapes);
    setFlippedCards([]);
    setMatchedPairs([]);
    setIsGameComplete(false);
    setShowFeedback(false);
    setIsPlaying(false);
    setTimeLeft(30);
  };

  const handleCardClick = (id) => {
    if (!isPlaying || flippedCards.length === 2 || flippedCards.includes(id) || matchedPairs.includes(id)) return;

    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [first, second] = newFlippedCards;
      const firstShape = shapes.find(s => s.id === first);
      const secondShape = shapes.find(s => s.id === second);

      if (firstShape.name === secondShape.name) {
        setMatchedPairs(prev => [...prev, first, second]);
        setFlippedCards([]);
        checkGameComplete([...matchedPairs, first, second]);
      } else {
        setTimeout(() => {
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const checkGameComplete = (pairs) => {
    if (pairs.length === shapes.length) {
      setIsGameComplete(true);
      setIsPlaying(false);
      setShowFeedback(true);
      setFeedbackMessage('恭喜你完成了記憶遊戲！');
      setIsSuccess(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  const handleGameOver = () => {
    setIsPlaying(false);
    setShowFeedback(true);
    setFeedbackMessage('時間到！遊戲結束。');
    setIsSuccess(false);
  };

  const startGame = () => {
    setIsPlaying(true);
    setTimeLeft(30);
  };

  const resetGame = () => {
    initializeGame();
  };

  return (
    <GameContainer>
      <Title>記憶遊戲</Title>
      <Description>
        這是一個考驗記憶力的遊戲。點擊卡片翻開它們，找出配對的圖形。
        你需要在30秒內完成所有配對。每對圖形都有相同的顏色和形狀。
        注意：你一次只能翻開兩張卡片，如果它們不匹配，卡片會自動翻回去。
      </Description>
      <div style={{ 
        marginBottom: '1rem',
        color: '#ffffff',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
      }}>
        剩餘時間：{timeLeft}秒
      </div>
      <GameArea>
        {shapes.map(shape => (
          <ShapeCard
            key={shape.id}
            flipped={flippedCards.includes(shape.id) || matchedPairs.includes(shape.id)}
            onClick={() => handleCardClick(shape.id)}
          >
            <ShapeFront>?</ShapeFront>
            <ShapeBack color={shape.color}>
              {shape.name === 'circle' && '⭕'}
              {shape.name === 'square' && '⬜'}
              {shape.name === 'triangle' && '▲'}
              {shape.name === 'star' && '⭐'}
              {shape.name === 'heart' && '❤️'}
              {shape.name === 'diamond' && '💎'}
            </ShapeBack>
          </ShapeCard>
        ))}
      </GameArea>
      <ProgressBar>
        <Progress progress={matchedPairs.length / 2} />
      </ProgressBar>
      <div>
        {!isPlaying && !isGameComplete && (
          <Button onClick={startGame}>開始遊戲</Button>
        )}
        <Button onClick={resetGame} disabled={isPlaying}>
          重新開始
        </Button>
      </div>
      <FeedbackMessage show={showFeedback} success={isSuccess}>
        {feedbackMessage}
      </FeedbackMessage>
    </GameContainer>
  );
};

export default MemoryGame; 