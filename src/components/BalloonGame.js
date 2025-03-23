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

const GameArea = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Balloon = styled.div`
  position: absolute;
  width: 60px;
  height: 80px;
  background: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

  &:hover {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
  }
`;

const BalloonText = styled.div`
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 0.5rem;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Balloon}:hover & {
    opacity: 1;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => (props.progress / 6) * 100}%;
  height: 100%;
  background: #4ECDC4;
  transition: width 0.3s ease;
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

const BalloonGame = ({ onComplete }) => {
  const [balloons, setBalloons] = useState([]);
  const [poppedCount, setPoppedCount] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [isGameComplete, setIsGameComplete] = useState(false);
  const [totalBalloons, setTotalBalloons] = useState(0);

  const memorialPhrases = [
    '懷念', '永垂不朽', '希望你過的很好', '一路好走', '再見了',
    '難忘與你共處的時光', '想念', '永遠的愛', '難忘的回憶',
    '祝福', '永遠的紀念', '懷念', '永恆的思念',
    '柔情長存', '美好的記憶', '心暖常在', '永恆的懷念',
    '祝福', '您給我最大的指導', '想念', '我們有過美好的記憶',
    '永遠的追思', '懷念', '永遠的紀念', '很思念您',
    '最深的祝福', '美好的記憶', '記得一起度過的時光', '懷念您的嚴謹',
    '祝福', '無盡的思念'
  ];

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B59B6', '#3498DB', '#E74C3C', '#2ECC71',
    '#F1C40F', '#1ABC9C', '#E67E22', '#16A085', '#D35400',
    '#27AE60', '#8E44AD', '#2980B9', '#C0392B', '#F39C12',
    '#1ABC9C', '#2ECC71', '#3498DB', '#9B59B6', '#34495E',
    '#16A085', '#27AE60', '#2980B9', '#8E44AD', '#2C3E50'
  ];

  useEffect(() => {
    if (isGameComplete) return;

    const spawnBalloon = () => {
      if (totalBalloons >= 30) return;

      const x = Math.random() * (window.innerWidth - 100);
      const y = Math.random() * 300;
      const color = colors[totalBalloons];
      const phrase = memorialPhrases[totalBalloons];

      setBalloons(prev => [...prev, { id: Date.now(), x, y, color, phrase }]);
      setTotalBalloons(prev => prev + 1);
    };

    const interval = setInterval(spawnBalloon, 800);
    return () => clearInterval(interval);
  }, [totalBalloons, isGameComplete]);

  const handleBalloonClick = (id) => {
    if (isGameComplete) return;

    setBalloons(prev => prev.filter(balloon => balloon.id !== id));
    setPoppedCount(prev => prev + 1);

    if (poppedCount + 1 === 6) {
      setFeedback('你已經點破了足夠的氣球！');
      setShowFeedback(true);
      setIsGameComplete(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    }
  };

  return (
    <GameContainer>
      <Title>氣球遊戲</Title>
      <Description>
        點擊氣球，揭開隱藏的紀念文字。
        當你點破6個氣球時，遊戲就會完成。
      </Description>
      <ProgressBar>
        <Progress progress={poppedCount} />
      </ProgressBar>
      <GameArea>
        {balloons.map(balloon => (
          <Balloon
            key={balloon.id}
            color={balloon.color}
            style={{ left: balloon.x, top: balloon.y }}
            onClick={() => handleBalloonClick(balloon.id)}
          >
            <BalloonText>{balloon.phrase}</BalloonText>
          </Balloon>
        ))}
      </GameArea>
      <FeedbackMessage className={showFeedback ? 'show' : ''}>
        {feedback}
      </FeedbackMessage>
    </GameContainer>
  );
};

export default BalloonGame; 