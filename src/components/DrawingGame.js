import React, { useState, useEffect } from 'react';
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
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const ElementsContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ElementCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CategoryTitle = styled.h3`
  color: #ffffff;
  font-size: 1.2rem;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const ElementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

const Element = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  padding: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #ffffff;
  text-align: center;
  font-size: 0.9rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
  }
  
  &.selected {
    background: rgba(46, 204, 113, 0.3);
    border: 2px solid #2ecc71;
  }
`;

const Canvas = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1rem;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SelectedElements = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  min-height: 200px;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
`;

const SelectedElement = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 0.5rem 1rem;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  button {
    background: none;
    border: none;
    color: #e74c3c;
    cursor: pointer;
    padding: 0;
    font-size: 1.2rem;
    
    &:hover {
      color: #c0392b;
    }
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background: ${props => props.variant === 'clear' ? '#e74c3c' : '#3498db'};
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:disabled {
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
  }
`;

const FeedbackMessage = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-radius: 10px;
  background: rgba(46, 204, 113, 0.2);
  color: white;
  text-align: center;
  font-size: 1.5rem;
  line-height: 1.8;
  opacity: ${props => props.show ? 1 : 0};
  transition: opacity 0.3s ease;
  animation: ${props => props.show ? pulse : 'none'} 0.5s ease-in-out;
  cursor: pointer;
  border: 2px solid #2ecc71;
  
  &:hover {
    background: rgba(46, 204, 113, 0.3);
  }
`;

const ContinuePrompt = styled.div`
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
  font-size: 1.8rem;
  font-weight: bold;
  color: #2ecc71;
  text-shadow: 0 0 10px rgba(46, 204, 113, 0.5);
  animation: ${pulse} 2s infinite;
`;

const DrawingGame = ({ onComplete }) => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const elements = {
    emotions: [
      { id: 'e1', text: '憤怒', category: 'emotions' },
      { id: 'e2', text: '悲傷', category: 'emotions' },
      { id: 'e3', text: '焦慮', category: 'emotions' },
      { id: 'e4', text: '恐懼', category: 'emotions' }
    ],
    thoughts: [
      { id: 't1', text: '為什麼是我？', category: 'thoughts' },
      { id: 't2', text: '我不值得', category: 'thoughts' },
      { id: 't3', text: '想要消失', category: 'thoughts' },
      { id: 't4', text: '沒有人理解', category: 'thoughts' }
    ],
    responses: [
      { id: 'r1', text: '勇敢面對', category: 'responses' },
      { id: 'r2', text: '尋求幫助', category: 'responses' },
      { id: 'r3', text: '自我保護', category: 'responses' },
      { id: 'r4', text: '保持希望', category: 'responses' }
    ]
  };

  const handleElementClick = (element) => {
    if (selectedElements.length >= 6) return;
    setSelectedElements(prev => [...prev, element]);
  };

  const handleRemoveElement = (elementId) => {
    setSelectedElements(prev => prev.filter(el => el.id !== elementId));
  };

  const handleClear = () => {
    setSelectedElements([]);
    setShowFeedback(false);
  };

  const handleComplete = () => {
    if (selectedElements.length < 3) return;
    
    // 根據選擇的元素生成反饋文字
    const emotions = selectedElements.filter(el => el.category === 'emotions').map(el => el.text);
    const thoughts = selectedElements.filter(el => el.category === 'thoughts').map(el => el.text);
    const responses = selectedElements.filter(el => el.category === 'responses').map(el => el.text);
    
    let feedback = '你的選擇揭示了內心深處的掙扎：\n\n';
    if (emotions.length > 0) {
      feedback += `面對這些情況，你感受到${emotions.join('、')}。\n\n`;
    }
    if (thoughts.length > 0) {
      feedback += `內心充滿了${thoughts.join('、')}的困惑。\n\n`;
    }
    if (responses.length > 0) {
      feedback += `但你選擇了${responses.join('、')}，這展現了你的勇氣。\n\n`;
    }
    
    setFeedbackText(feedback);
    setShowFeedback(true);
  };

  const handleFeedbackClick = () => {
    onComplete();
  };

  return (
    <GameContainer>
      <Title>匿名信的真諦</Title>
      <Description>
        選擇不同的情感元素來表達你對匿名信的想法。
        你可以選擇情緒、想法和應對方式來組合。
        至少需要選擇3個元素才能完成創作。
      </Description>
      <GameArea>
        <ElementsContainer>
          <ElementCategory>
            <CategoryTitle>情緒</CategoryTitle>
            <ElementsGrid>
              {elements.emotions.map(element => (
                <Element
                  key={element.id}
                  onClick={() => handleElementClick(element)}
                  className={selectedElements.some(el => el.id === element.id) ? 'selected' : ''}
                >
                  {element.text}
                </Element>
              ))}
            </ElementsGrid>
          </ElementCategory>
          <ElementCategory>
            <CategoryTitle>想法</CategoryTitle>
            <ElementsGrid>
              {elements.thoughts.map(element => (
                <Element
                  key={element.id}
                  onClick={() => handleElementClick(element)}
                  className={selectedElements.some(el => el.id === element.id) ? 'selected' : ''}
                >
                  {element.text}
                </Element>
              ))}
            </ElementsGrid>
          </ElementCategory>
          <ElementCategory>
            <CategoryTitle>應對方式</CategoryTitle>
            <ElementsGrid>
              {elements.responses.map(element => (
                <Element
                  key={element.id}
                  onClick={() => handleElementClick(element)}
                  className={selectedElements.some(el => el.id === element.id) ? 'selected' : ''}
                >
                  {element.text}
                </Element>
              ))}
            </ElementsGrid>
          </ElementCategory>
        </ElementsContainer>
        <Canvas>
          <SelectedElements>
            {selectedElements.map(element => (
              <SelectedElement key={element.id}>
                {element.text}
                <button onClick={() => handleRemoveElement(element.id)}>×</button>
              </SelectedElement>
            ))}
          </SelectedElements>
          <Controls>
            <ActionButton variant="clear" onClick={handleClear}>
              清除選擇
            </ActionButton>
            <ActionButton
              onClick={handleComplete}
              disabled={selectedElements.length < 3}
            >
              完成創作
            </ActionButton>
          </Controls>
        </Canvas>
      </GameArea>
      <FeedbackMessage
        show={showFeedback}
        onClick={handleFeedbackClick}
      >
        {feedbackText}
        {showFeedback && (
          <ContinuePrompt>
            點擊這裡繼續...
          </ContinuePrompt>
        )}
      </FeedbackMessage>
    </GameContainer>
  );
};

export default DrawingGame; 