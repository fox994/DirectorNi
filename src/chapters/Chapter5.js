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

const Chapter5 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showPhilosophy, setShowPhilosophy] = useState(false);

  const chapterData = {
    title: "第五章：危機與質疑",
    content: `張衡的世界似乎開始崩塌。他原本只是抱著完成任務的心態，調查一封匿名信，
      如今卻陷入了無法抽身的深淵。他開始認同倪主任筆記中提到的某些理想，
      那些看似抽象的哲學思維，正在他的腦海中生根發芽。`,
    questions: [
      {
        context: '張衡發現自己陷入了一個進退兩難的處境。一方面，他需要完成調查任務；另一方面，他開始質疑自己的角色定位。',
        question: '在這種情況下，你認為張衡應該如何看待自己的角色？',
        choices: [
          {
            text: '堅持專業調查員的立場，保持客觀中立。',
            feedback: '這個選擇體現了職業操守，但在複雜的現實中，純粹的客觀是否存在？',
            hint: '有時候，過分強調客觀反而會忽略了更深層的真相。'
          },
          {
            text: '接受自己可能只是更大計劃中的一顆棋子。',
            feedback: '你選擇了一個較為現實的認知，承認在某些力量面前，個人的渺小。',
            hint: '認識到自己的局限，可能是突破局限的第一步。'
          },
          {
            text: '嘗試在職責和良知之間找到平衡。',
            feedback: '你試圖在複雜的情境中尋找一個折衷點，這需要極大的智慧和勇氣。',
            hint: '平衡並不意味著妥協，而是在不同價值之間做出更明智的選擇。'
          }
        ]
      },
      {
        context: '公司內部對張衡的負面傳聞開始蔓延，質疑他報告的可信度。這讓他不得不重新審視自己的處境。',
        question: '面對這種質疑，你會如何應對？',
        choices: [
          {
            text: '堅持自己的立場，繼續深入調查。',
            feedback: '你選擇了一條艱難但正直的道路。這需要極大的勇氣和決心。',
            hint: '但要小心，過分的堅持可能會讓自己陷入更危險的境地。'
          },
          {
            text: '暫時退讓，等待適當時機。',
            feedback: '你採取了一個策略性的方式，這或許能為將來留下更多可能性。',
            hint: '退讓不等於放棄，有時候是為了更好的前進。'
          },
          {
            text: '尋求其他同事的支持和理解。',
            feedback: '你試圖建立聯盟，這在職場中是很重要的生存策略。',
            hint: '但要謹記，在這種情況下，誰才是真正可以信任的人？'
          }
        ]
      },
      {
        context: '在倪主任消失後，公司的運作出現明顯停滯，很多業務推動變得舉步維艱。',
        question: '這種現象反映了什麼問題？',
        choices: [
          {
            text: '倪主任的管理能力確實不可或缺。',
            feedback: '你認識到了倪主任在公司運作中的重要性，他的存在遠比表面看起來更加關鍵。',
            hint: '一個人的價值，有時要在失去後才能真正體現。'
          },
          {
            text: '公司的制度過於依賴個人。',
            feedback: '你從制度層面分析問題，這反映了對組織運作機制的深入思考。',
            hint: '過度依賴個人的制度，本身就是一種潛在的危機。'
          },
          {
            text: '這可能是某種蓄意的混亂。',
            feedback: '你提出了一個大膽的假設，這種混亂是否真的是偶然的？',
            hint: '有時候，表面的混亂背後可能隱藏著某種計劃。'
          }
        ]
      }
    ],
    philosophicalReflection: {
      title: "角色與自我",
      content: `在現代社會中，每個人都扮演著不同的角色。
        但當這些角色之間產生衝突時，我們該如何自處？
        
        張衡的困境正是源於此：他既是調查員，又是真相的探求者，
        同時還可能是某個更大計劃中的一個環節。
        
        這讓我們不禁思考：在複雜的社會關係中，
        我們是否真的能夠保持完全的獨立性？
        還是說，承認自己的局限，反而是一種更高的智慧？`
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
    localStorage.setItem('chapter5Complete', 'true');
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

export default Chapter5; 