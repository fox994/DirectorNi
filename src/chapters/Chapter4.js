import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DialogChoice from '../components/DialogChoice';
import PasswordGame from '../components/PasswordGame';
import { getChapter } from './data';

const ChapterContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #e0e0e0;
  text-align: center;
  margin-bottom: 30px;
`;

const Content = styled.div`
  color: #e0e0e0;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const PhilosophyExplanation = styled.div`
  margin: 30px 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  color: #e0e0e0;

  h3 {
    color: #88ff88;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const NavButton = styled.button`
  padding: 12px 25px;
  background: transparent;
  border: 1px solid #e0e0e0;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(224, 224, 224, 0.1);
    transform: translateY(-2px);
  }
`;

const Chapter4 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [showPasswordGame, setShowPasswordGame] = useState(false);
  const [isPasswordGameComplete, setIsPasswordGameComplete] = useState(false);

  const chapterData = getChapter(4);

  // 檢查是否已經完成密碼遊戲
  useEffect(() => {
    const isComplete = localStorage.getItem('chapter4Complete') === 'true';
    if (isComplete) {
      setShowPhilosophy(true);
    }
  }, []);

  const handleChoice = (choiceIndex) => {
    const currentQuestion = chapterData.questions[currentSection];
    const selectedChoice = currentQuestion.choices[choiceIndex];
    setFeedback(selectedChoice.feedback);
    setHint(selectedChoice.hint);
    setHasAnswered(true);
    setShowContinue(true);
  };

  const handleContinue = () => {
    if (currentSection < chapterData.questions.length - 1) {
      setCurrentSection(currentSection + 1);
      setFeedback('');
      setHint('');
      setHasAnswered(false);
      setShowContinue(false);
    } else {
      // 完成所有問答後，顯示密碼遊戲
      setShowPasswordGame(true);
      setShowContinue(false);
    }
  };

  const handlePasswordGameComplete = () => {
    setIsPasswordGameComplete(true);
    setShowPasswordGame(false);
    setShowPhilosophy(true);
    // 在密碼遊戲完成時記錄進度
    localStorage.setItem('chapter4Complete', 'true');
  };

  const handleContinueStory = () => {
    navigate('/');
  };

  return (
    <ChapterContainer>
      <Title>{chapterData.title}</Title>
      <Content>{chapterData.content}</Content>

      {!showPhilosophy && !showPasswordGame && (
        <>
          <DialogChoice
            question={chapterData.questions[currentSection].question}
            context={chapterData.questions[currentSection].context}
            choices={chapterData.questions[currentSection].choices}
            onChoice={handleChoice}
            feedback={feedback}
            hint={hint}
            disabled={hasAnswered}
            showContinue={showContinue}
            onContinue={handleContinue}
          />
        </>
      )}

      {showPasswordGame && (
        <PasswordGame onComplete={handlePasswordGameComplete} />
      )}

      {showPhilosophy && (
        <>
          <PhilosophyExplanation>
            <h3>{chapterData.philosophicalReflection.title}</h3>
            <p>{chapterData.philosophicalReflection.content}</p>
          </PhilosophyExplanation>

          <NavigationButtons>
            <NavButton onClick={handleContinueStory}>
              繼續閱讀
            </NavButton>
          </NavigationButtons>
        </>
      )}
    </ChapterContainer>
  );
};

export default Chapter4; 