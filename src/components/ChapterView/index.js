import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import chapters, { getChapter, getNextChapter } from '../../chapters/data';
import DialogChoice from '../DialogChoice';
import PasswordGame from '../PasswordGame';
import DrawingGame from '../DrawingGame';
import BalloonGame from '../BalloonGame';
import MemoryGame from '../MemoryGame';
import {
  ChapterContainer,
  ChapterTitle,
  Content,
  NavigationButtons,
  NavButton,
  PhilosophyExplanation
} from './styles';

const ChapterView = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();
  const [chapter, setChapter] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showPhilosophy, setShowPhilosophy] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [showContinue, setShowContinue] = useState(false);
  const [showPasswordGame, setShowPasswordGame] = useState(false);
  const [showDrawingGame, setShowDrawingGame] = useState(false);
  const [showBalloonGame, setShowBalloonGame] = useState(false);
  const [showMemoryGame, setShowMemoryGame] = useState(false);
  const [isPasswordGameComplete, setIsPasswordGameComplete] = useState(false);
  const [isDrawingGameComplete, setIsDrawingGameComplete] = useState(false);
  const [isBalloonGameComplete, setIsBalloonGameComplete] = useState(false);
  const [isMemoryGameComplete, setIsMemoryGameComplete] = useState(false);

  useEffect(() => {
    try {
      const loadedChapter = getChapter(parseInt(chapterId));
      if (loadedChapter) {
        setChapter(loadedChapter);
        setCurrentQuestionIndex(0);
        setShowPhilosophy(false);
        setShowPasswordGame(false);
        setShowDrawingGame(false);
        setShowBalloonGame(false);
        setShowMemoryGame(false);
        setFeedback('');
        setHint('');
        setShowContinue(false);
        setIsPasswordGameComplete(false);
        setIsDrawingGameComplete(false);
        setIsBalloonGameComplete(false);
        setIsMemoryGameComplete(false);

        // 檢查是否已經完成遊戲
        const isComplete = localStorage.getItem(`chapter${chapterId}Complete`) === 'true';
        if (isComplete) {
          setShowPhilosophy(true);
        }
      } else {
        console.error('Chapter not found:', chapterId);
        navigate('/');
      }
    } catch (error) {
      console.error('Error loading chapter:', error);
      navigate('/');
    }
  }, [chapterId, navigate]);

  const handleChoice = (choiceIndex) => {
    if (!chapter || !chapter.questions[currentQuestionIndex]) return;
    
    const currentQuestion = chapter.questions[currentQuestionIndex];
    const selectedChoice = currentQuestion.choices[choiceIndex];
    
    setFeedback(selectedChoice.feedback);
    setHint(selectedChoice.hint);
    setShowContinue(true);
  };

  const handleContinue = () => {
    if (currentQuestionIndex < chapter.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setFeedback('');
      setHint('');
      setShowContinue(false);
    } else {
      // 根據章節顯示不同的遊戲
      const chapterNum = parseInt(chapterId);
      if (chapterNum === 1) {
        setShowMemoryGame(true);
      } else if (chapterNum === 4) {
        setShowPasswordGame(true);
      } else if (chapterNum === 5) {
        setShowDrawingGame(true);
      } else if (chapterNum === 6) {
        setShowBalloonGame(true);
      } else {
        setShowPhilosophy(true);
      }
    }
  };

  const handlePasswordGameComplete = () => {
    setIsPasswordGameComplete(true);
    setShowPasswordGame(false);
    setShowPhilosophy(true);
    // 記錄完成狀態
    localStorage.setItem(`chapter${chapterId}Complete`, 'true');
  };

  const handleDrawingGameComplete = () => {
    setIsDrawingGameComplete(true);
    setShowDrawingGame(false);
    setShowPhilosophy(true);
    // 記錄完成狀態
    localStorage.setItem(`chapter${chapterId}Complete`, 'true');
  };

  const handleBalloonGameComplete = () => {
    setIsBalloonGameComplete(true);
    setShowBalloonGame(false);
    setShowPhilosophy(true);
    // 記錄完成狀態
    localStorage.setItem(`chapter${chapterId}Complete`, 'true');
  };

  const handleMemoryGameComplete = () => {
    setIsMemoryGameComplete(true);
    setShowMemoryGame(false);
    setShowPhilosophy(true);
    // 記錄完成狀態
    localStorage.setItem(`chapter${chapterId}Complete`, 'true');
  };

  const handleContinueStory = () => {
    navigate('/');
  };

  if (!chapter) return null;

  const currentQuestion = chapter.questions[currentQuestionIndex];

  return (
    <ChapterContainer>
      <ChapterTitle>{chapter.title}</ChapterTitle>
      <Content>{chapter.content}</Content>

      {!showPhilosophy && !showPasswordGame && !showDrawingGame && !showBalloonGame && !showMemoryGame && currentQuestion && (
        <DialogChoice
          context={currentQuestion.context}
          question={currentQuestion.question}
          choices={currentQuestion.choices}
          onChoice={handleChoice}
          feedback={feedback}
          hint={hint}
          showContinue={showContinue}
          onContinue={handleContinue}
        />
      )}

      {showPasswordGame && (
        <PasswordGame onComplete={handlePasswordGameComplete} />
      )}

      {showDrawingGame && (
        <DrawingGame onComplete={handleDrawingGameComplete} />
      )}

      {showBalloonGame && (
        <BalloonGame onComplete={handleBalloonGameComplete} />
      )}

      {showMemoryGame && (
        <MemoryGame onComplete={handleMemoryGameComplete} />
      )}

      {showPhilosophy && (
        <>
          <PhilosophyExplanation>
            <h3>{chapter.philosophicalReflection.title}</h3>
            <p>{chapter.philosophicalReflection.content}</p>
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

export default ChapterView; 