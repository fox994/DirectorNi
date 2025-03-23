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

const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(224, 224, 224, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(224, 224, 224, 0.4);
  }
  100% {
    box-shadow: 0 0 5px rgba(224, 224, 224, 0.2);
  }
`;

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`;

const PuzzleContainer = styled.div`
  margin: 40px 0;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 20px;
    margin: 20px 0;
  }
`;

const Instructions = styled.div`
  color: #e0e0e0;
  font-size: 1.2em;
  margin-bottom: 20px;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const DragItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const DropZonesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const DragItem = styled.div`
  padding: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid ${props => props.isWrong ? '#ff4444' : 'rgba(224, 224, 224, 0.2)'};
  border-radius: 8px;
  cursor: grab;
  user-select: none;
  transition: all 0.3s ease;
  color: #e0e0e0;
  min-width: 150px;
  text-align: center;
  animation: ${props => props.isWrong ? shake : 'none'} 0.5s ease;
  touch-action: none;

  &:hover {
    background: rgba(224, 224, 224, 0.1);
    transform: translateY(-2px);
  }

  &:active {
    cursor: grabbing;
    transform: scale(0.98);
  }

  @media (max-width: 768px) {
    width: 90%;
    min-width: auto;
    padding: 12px;
    font-size: 0.95em;
  }
`;

const DropZone = styled.div`
  padding: 20px;
  background: ${props => props.isOver ? 'rgba(224, 224, 224, 0.1)' : 'rgba(0, 0, 0, 0.2)'};
  border: 2px dashed ${props => props.isOver ? '#88ff88' : 'rgba(224, 224, 224, 0.3)'};
  border-radius: 8px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  animation: ${props => props.isCorrect ? glow : 'none'} 2s infinite;
  touch-action: none;

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 80px;
  }
`;

const DropZoneLabel = styled.div`
  color: ${props => props.isEmpty ? '#666' : '#e0e0e0'};
  font-style: italic;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const Feedback = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: ${props => props.isError ? '#ff4444' : '#88ff88'};
  text-align: center;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 20px;
    font-size: 0.95em;
  }
`;

const RetryButton = styled.button`
  margin: 20px auto 0;
  display: block;
  padding: 12px 30px;
  background: transparent;
  border: 1px solid #e0e0e0;
  color: #e0e0e0;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.1em;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:hover {
    background: rgba(224, 224, 224, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 10px 25px;
    font-size: 1em;
  }
`;

const ContinueButton = styled(RetryButton)`
  margin-top: 30px;
`;

function PuzzleDrag({ puzzle, onComplete }) {
  const [items, setItems] = useState(puzzle.items);
  const [zones, setZones] = useState(puzzle.zones);
  const [draggedItem, setDraggedItem] = useState(null);
  const [isComplete, setIsComplete] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [wrongAttempts, setWrongAttempts] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  useEffect(() => {
    // 防止 iOS 上的橡皮筋效果
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, []);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.target.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = '1';
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, zoneId) => {
    e.preventDefault();
    if (!draggedItem) return;

    const zone = zones.find(z => z.id === zoneId);
    if (zone.correctItemId === draggedItem.id) {
      // 正確配對
      const updatedZones = zones.map(z => {
        if (z.id === zoneId) {
          return { ...z, item: draggedItem };
        }
        return z;
      });

      const updatedItems = items.filter(item => item.id !== draggedItem.id);
      setZones(updatedZones);
      setItems(updatedItems);
      setFeedback({
        isError: false,
        message: "正確！這個線索找到了它的歸屬。"
      });

      // 檢查是否完成所有配對
      if (updatedItems.length === 0) {
        setTimeout(() => {
          setIsComplete(true);
          setFeedback({
            isError: false,
            message: puzzle.completionFeedback
          });
        }, 1000);
      }
    } else {
      // 錯誤配對
      setWrongAttempts({ ...wrongAttempts, [draggedItem.id]: true });
      setFeedback({
        isError: true,
        message: "這個線索似乎不屬於這裡，請重新思考。"
      });
    }
  };

  // 觸控事件處理
  const handleTouchStart = (e, item) => {
    setTouchStart(e.touches[0]);
    setDraggedItem(item);
    e.target.style.opacity = '0.5';
  };

  const handleTouchMove = (e) => {
    if (!touchStart || !draggedItem) return;
    e.preventDefault();
    setTouchEnd(e.touches[0]);
  };

  const handleTouchEnd = (e, zoneId) => {
    if (!touchStart || !draggedItem) return;
    e.preventDefault();
    e.target.style.opacity = '1';
    setDraggedItem(null);
    setTouchStart(null);
    setTouchEnd(null);

    const zone = zones.find(z => z.id === zoneId);
    if (zone.correctItemId === draggedItem.id) {
      // 正確配對
      const updatedZones = zones.map(z => {
        if (z.id === zoneId) {
          return { ...z, item: draggedItem };
        }
        return z;
      });

      const updatedItems = items.filter(item => item.id !== draggedItem.id);
      setZones(updatedZones);
      setItems(updatedItems);
      setFeedback({
        isError: false,
        message: "正確！這個線索找到了它的歸屬。"
      });

      // 檢查是否完成所有配對
      if (updatedItems.length === 0) {
        setTimeout(() => {
          setIsComplete(true);
          setFeedback({
            isError: false,
            message: puzzle.completionFeedback
          });
        }, 1000);
      }
    } else {
      // 錯誤配對
      setWrongAttempts({ ...wrongAttempts, [draggedItem.id]: true });
      setFeedback({
        isError: true,
        message: "這個線索似乎不屬於這裡，請重新思考。"
      });
    }
  };

  const handleRetry = () => {
    setItems(puzzle.items);
    setZones(puzzle.zones);
    setWrongAttempts({});
    setFeedback(null);
  };

  return (
    <PuzzleContainer>
      <Instructions>{puzzle.instructions}</Instructions>
      
      <DragItemsContainer>
        {items.map(item => (
          <DragItem
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            onTouchStart={(e) => handleTouchStart(e, item)}
            onTouchMove={handleTouchMove}
            onTouchEnd={(e) => handleTouchEnd(e, null)}
            isWrong={wrongAttempts[item.id]}
          >
            {item.text}
          </DragItem>
        ))}
      </DragItemsContainer>

      <DropZonesContainer>
        {zones.map(zone => (
          <DropZone
            key={zone.id}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, zone.id)}
            onTouchEnd={(e) => handleTouchEnd(e, zone.id)}
            isOver={draggedItem !== null}
            isCorrect={zone.item && zone.correctItemId === zone.item.id}
          >
            {zone.item ? (
              <div>{zone.item.text}</div>
            ) : (
              <DropZoneLabel isEmpty>{zone.label}</DropZoneLabel>
            )}
          </DropZone>
        ))}
      </DropZonesContainer>

      {feedback && (
        <>
          <Feedback isError={feedback.isError}>
            {feedback.message}
          </Feedback>
          {feedback.isError && (
            <RetryButton onClick={handleRetry}>
              重新嘗試
            </RetryButton>
          )}
        </>
      )}

      {isComplete && (
        <ContinueButton onClick={onComplete}>
          繼續故事
        </ContinueButton>
      )}
    </PuzzleContainer>
  );
}

export default PuzzleDrag; 