import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DialogChoice from '../components/DialogChoice';

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

const Chapter6 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  const chapterData = {
    title: "第六章：真相與選擇",
    content: `一切似乎都指向了一個不可避免的結局。
      張衡站在公司大樓的頂層，手中握著倪主任留下的最後一份文件。
      風吹動著他的衣角，也吹散了他心中最後一絲疑慮。`,
    questions: [
      {
        context: '張衡終於找到了倪主任失蹤的真相，但這個真相可能會動搖整個公司的根基。',
        question: '在這種情況下，你認為應該如何處理這個真相？',
        choices: [
          {
            text: '公開真相，不管後果如何。',
            feedback: '你選擇了最直接但也最具挑戰性的道路。真相有時候會帶來意想不到的改變。',
            hint: '但要記住，改變不一定都是破壞性的。'
          },
          {
            text: '將真相告訴特定的人，尋求幫助。',
            feedback: '你選擇了一個相對謹慎的方式，這可能會幫助你更好地控制局面。',
            hint: '選擇信任對象時要特別小心，因為每個人都可能有自己的立場。'
          },
          {
            text: '暫時保留真相，等待更好的時機。',
            feedback: '你選擇了一個策略性的方式，但要注意，時機可能永遠不會完美。',
            hint: '有時候，等待本身就是一種選擇。'
          }
        ]
      },
      {
        context: '倪主任的筆記中提到了一個關於公司未來的重大計劃，這個計劃可能會影響到所有員工。',
        question: '面對這個計劃，你會採取什麼立場？',
        choices: [
          {
            text: '支持這個計劃，因為它可能帶來積極的改變。',
            feedback: '你選擇了相信變革的力量，這需要極大的勇氣和遠見。',
            hint: '但要記住，改變總是伴隨著風險和不確定性。'
          },
          {
            text: '反對這個計劃，維護現有的秩序。',
            feedback: '你選擇了保守的立場，這可能會保護一些人的利益。',
            hint: '但要思考，現有的秩序是否真的值得維護？'
          },
          {
            text: '保持中立，觀察事態發展。',
            feedback: '你選擇了一個看似安全的立場，但在某些情況下，不選擇也是一種選擇。',
            hint: '有時候，中立可能意味著默許。'
          }
        ]
      },
      {
        context: '在調查過程中，張衡發現自己的很多同事都捲入了這個事件，每個人都有自己的立場和選擇。',
        question: '這種情況下，你如何看待人性？',
        choices: [
          {
            text: '每個人都有自己的苦衷和理由。',
            feedback: '你選擇了一個包容的視角，這體現了對人性複雜性的理解。',
            hint: '理解不等於認同，同理心和判斷力同樣重要。'
          },
          {
            text: '利益才是最終的驅動力。',
            feedback: '你選擇了一個現實的視角，這反映了對人性中功利面的洞察。',
            hint: '但人性中是否還有超越利益的東西？'
          },
          {
            text: '真相和正義終將勝利。',
            feedback: '你選擇了一個理想主義的立場，這體現了對人性本善的信念。',
            hint: '理想很重要，但現實往往更加複雜。'
          }
        ]
      }
    ],
    philosophicalReflection: {
      title: "真相的重量",
      content: `在這個故事中，我們看到了真相的多面性：
        它可以是一把雙刃劍，既能帶來改變，也能造成破壞；
        它可以是一面鏡子，照出我們內心的掙扎和選擇；
        它也可以是一座橋樑，連接過去和未來。
        
        但最重要的是，真相永遠不是孤立的存在。
        它總是與我們的選擇、我們的價值觀、
        以及我們對未來的期待緊密相連。
        
        也許，真相的意義不在於它本身，
        而在於我們如何面對它，如何運用它，
        最終如何讓它成為推動改變的力量。`
    }
  };

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
      setShowPhilosophy(true);
    }
  };

  const handleContinueStory = () => {
    localStorage.setItem('chapter6Complete', 'true');
    navigate('/');
  };

  return (
    <ChapterContainer>
      <Title>{chapterData.title}</Title>
      <Content>{chapterData.content}</Content>

      {!showPhilosophy && (
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

      {showPhilosophy && (
        <>
          <PhilosophyExplanation>
            <h3>{chapterData.philosophicalReflection.title}</h3>
            <p>{chapterData.philosophicalReflection.content}</p>
          </PhilosophyExplanation>

          <NavigationButtons>
            <NavButton onClick={handleContinueStory}>
              繼續故事
            </NavButton>
          </NavigationButtons>
        </>
      )}
    </ChapterContainer>
  );
};

export default Chapter6; 