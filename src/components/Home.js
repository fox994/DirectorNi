import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors, animations, mixins, shadows, typography } from '../styles/theme';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  ${mixins.filmGrainEffect}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${colors.accent}33,
      ${colors.accent}66,
      ${colors.accent}33,
      transparent
    );
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 20px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
  color: ${colors.text.accent};
  text-shadow: ${shadows.text};
  font-family: ${typography.secondary};
  position: relative;
  ${mixins.flickerEffect}

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      ${colors.gold},
      transparent
    );
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    font-size: 2em;
  }
`;

const Introduction = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 40px;
  color: ${colors.text.secondary};
  text-align: justify;
  padding: 20px;
  background: ${colors.secondary}33;
  border-radius: 8px;
  box-shadow: ${shadows.inner};
  ${mixins.oldPaperTexture}
  animation: ${animations.textReveal} 0.8s ease-out;

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    font-size: 1em;
    padding: 15px;
    margin-bottom: 30px;
  }
`;

const ChapterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${colors.accent}33,
      transparent
    );
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 30px;
  }
`;

const ChapterButton = styled.button`
  background: ${colors.secondary}33;
  border: 1px solid ${colors.accent}33;
  color: ${colors.text.primary};
  padding: 20px;
  font-size: 1.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${typography.primary};
  position: relative;
  overflow: hidden;
  ${mixins.oldPaperTexture}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      ${colors.accent}11,
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  &:hover {
    background: ${colors.secondary}66;
    border-color: ${colors.gold};
    transform: translateY(-2px);
    box-shadow: ${shadows.box};

    &::before {
      transform: translateX(100%);
    }
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 15px;
    font-size: 1em;
  }
`;

const EndingButton = styled(ChapterButton)`
  background: ${props => props.isUnlocked ? `${colors.secondary}66` : `${colors.secondary}33`};
  opacity: ${props => props.isUnlocked ? '1' : '0.5'};
  cursor: ${props => props.isUnlocked ? 'pointer' : 'not-allowed'};
  
  &:hover {
    background: ${props => props.isUnlocked ? `${colors.secondary}99` : `${colors.secondary}33`};
  }
`;

const ProgressContainer = styled.div`
  margin: 30px auto;
  padding: 20px;
  background: ${colors.secondary}33;
  border-radius: 12px;
  border: 1px solid ${colors.accent}33;
  max-width: 600px;
  ${mixins.oldPaperTexture}
`;

const ProgressTitle = styled.h2`
  color: ${colors.text.accent};
  text-align: center;
  margin-bottom: 15px;
  font-size: 1.3em;
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 10px 0;
  overflow: hidden;
  
  &::after {
    content: '';
    display: block;
    width: ${props => props.progress}%;
    height: 100%;
    background: linear-gradient(90deg, #88ff88, #ffff88);
    transition: width 0.5s ease;
  }
`;

const ProgressText = styled.div`
  text-align: center;
  color: ${colors.text.secondary};
  font-size: 1.1em;
`;

const ChapterStatus = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  margin-top: 15px;
`;

const ChapterStatusItem = styled.div`
  text-align: center;
  padding: 8px;
  background: ${props => props.completed ? 'rgba(136, 255, 136, 0.2)' : 'rgba(0, 0, 0, 0.2)'};
  border-radius: 6px;
  font-size: 0.9em;
  color: ${props => props.completed ? '#88ff88' : '#cccccc'};
  border: 1px solid ${props => props.completed ? 'rgba(136, 255, 136, 0.3)' : 'rgba(224, 224, 224, 0.1)'};
`;

const ResetButton = styled.button`
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 25px;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

function Home() {
  const navigate = useNavigate();
  const [isEndingUnlocked, setIsEndingUnlocked] = useState(false);
  const [progress, setProgress] = useState(0);
  const [completedChapters, setCompletedChapters] = useState([]);

  const chapters = [
    { id: 1, title: '第一章：消失的倪主任' },
    { id: 2, title: '第二章：筆記的啟示' },
    { id: 3, title: '第三章：困局之中' },
    { id: 4, title: '第四章：被隱藏的真相' },
    { id: 5, title: '第五章：危機與質疑' },
    { id: 6, title: '第六章：緬懷與調查' }
  ];

  useEffect(() => {
    // 檢查所有章節的完成狀態
    const completed = [1, 2, 3, 4, 5, 6].filter(chapter => {
      return localStorage.getItem(`chapter${chapter}Complete`) === 'true';
    });
    
    setCompletedChapters(completed);
    setProgress((completed.length / 6) * 100);
    setIsEndingUnlocked(completed.length === 6);
  }, []);

  const handleEndingClick = () => {
    if (isEndingUnlocked) {
      navigate('/ending');
    }
  };

  const handleResetGame = () => {
    if (window.confirm('確定要重置遊戲進度嗎？這將清除所有已完成的章節。')) {
      for (let i = 1; i <= 6; i++) {
        localStorage.removeItem(`chapter${i}Complete`);
      }
      window.location.reload();
    }
  };

  return (
    <HomeContainer>
      <Title>消失的倪主任</Title>
      <Introduction>
        在這座行政大樓中，倪主任是一個充滿神秘色彩的人物。
        他以高效率和精準的工作方式著稱，卻在某一天突然消失無蹤。
        作為調查員的你，將揭開這個充滿懸疑的故事，探索真相背後隱藏的秘密。
        每一個選擇都可能影響故事的走向，每一段對話都可能藏有重要線索。
        你準備好進入這個充滿謎團的世界了嗎？
      </Introduction>

      <ProgressContainer>
        <ProgressTitle>故事進度</ProgressTitle>
        <ProgressText>完成進度：{Math.round(progress)}%</ProgressText>
        <ProgressBar progress={progress} />
        <ChapterStatus>
          {chapters.map(chapter => (
            <ChapterStatusItem
              key={chapter.id}
              completed={completedChapters.includes(chapter.id)}
            >
              {chapter.title}
            </ChapterStatusItem>
          ))}
        </ChapterStatus>
      </ProgressContainer>

      <ChapterGrid>
        {chapters.map(chapter => (
          <ChapterButton
            key={chapter.id}
            onClick={() => navigate(`/chapter/${chapter.id}`)}
          >
            {chapter.title}
          </ChapterButton>
        ))}
        
        <EndingButton
          isUnlocked={isEndingUnlocked}
          onClick={handleEndingClick}
        >
          {isEndingUnlocked ? '真相的終點' : '真相的終點 (鎖定)'}
        </EndingButton>
      </ChapterGrid>

      <ResetButton onClick={handleResetGame}>
        重置遊戲進度
      </ResetButton>
    </HomeContainer>
  );
}

export default Home; 