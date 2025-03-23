import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import DialogChoice from '../components/DialogChoice';
import PuzzleDrag from '../components/PuzzleDrag';
import { ContinueButton, NavigationButtons, NavButton } from '../components/styles/buttons';

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

const Paragraph = styled.p`
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

const Chapter2 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [showPuzzle, setShowPuzzle] = useState(false);
  const [puzzleComplete, setPuzzleComplete] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showContinue, setShowContinue] = useState(false);

  const dialogChoices = [
    {
      question: "這些筆記中的香氣，讓你聯想到什麼？",
      context: "紀律調查員張衡翻開筆記，筆記本有著某種香味，帶有松脂的清冽和泥土的濕潤。",
      choices: [
        {
          text: "一片被晨霧籠罩的幽靜松林",
          feedback: "確實，這種獨特的香氣正如清晨初霧中松林散發出的氣息，讓人感受到一種清新與靜謐。這股氣味似乎能喚起人對大自然深處秘密的聯想，彷彿筆記背後隱藏著與自然、生命律動相關的訊息。或許這暗示著倪主任內心世界中的某種自我淨化或回歸本源的追求，而這種氣息正是他精心安排的線索之一。",
          hint: "大自然往往能給人啟發和平靜。"
        },
        {
          text: "古老圖書館中的典籍",
          feedback: "雖然也是一種特殊的氣味，但似乎不太符合描述...但描述中強調的松脂清冽和泥土的濕潤感，更貼近大自然的氣息，而非書卷堆積的沉悶。這種氣味明顯帶有自然界的生機和一絲野性的味道，而非單純知識與歷史的厚重。",
          hint: "仔細回想描述中提到的具體氣味特徵。筆記中這股香氣或許暗示著一種與自然緊密相連的意象。"
        }
      ]
    },
    {
      question: "為什麼辦公室在夜晚會出現異象？",
      context: "同事們議論紛紛，有人說看見燈光忽明忽暗，有人說聽見細微的腳步聲。",
      choices: [
        {
          text: "可能是大樓的電路問題",
          feedback: "這個解釋雖然在技術層面上能解釋燈光的忽明忽暗，但卻過於單薄，無法涵蓋細微腳步聲以及其他不尋常現象。這些現象似乎並非僅由電路故障引起，而是與某種更深層次的神秘力量或事件有關。",
          hint: "仔細觀察現場的每個細節，或許能發現這些現象與辦公室內其他不尋常現象之間存在著某種聯繫。"
        },
        {
          text: "這些可能是倪主任留下的線索",
          feedback: "有趣的推測，這些異象確實顯得很不尋常...讓人聯想到倪主任在消失前可能特意安排了一系列異象作為暗示。忽明忽暗的燈光和細微的腳步聲，都像是在向人傳達某種信息，可能是他對權力操控或內心狀態的一種無聲告白。",
          hint: "繼續探索，或許能發現更多線索。這些異象是否與他辦公室中留下的未發送郵件草稿和筆記中透露的訊息有關？"
        }
      ]
    }
  ];

  const notePuzzle = {
    instructions: "將筆記中的線索片段拖放到對應的主題區域中，重建倪主任的思緒脈絡。",
    items: [
      { id: 1, text: "有些人愛追求自由，但越追逐，越陷進去" },
      { id: 2, text: "人從愛欲生憂，從憂生怖" },
      { id: 4, text: "人嘛，總得為自己設點框框才踏實" },
      { id: 3, text: "愛與憂、憂與怖，這是人性注定的枷鎖" }
    ],
    zones: [
      { id: 'philosophy', label: "東方哲學思想", correctItemId: 2 },
      { id: 'freedom', label: "自由的矛盾", correctItemId: 1 },
      { id: 'control', label: "控制的本質", correctItemId: 4 },
      { id: 'human_nature', label: "人性的枷鎖", correctItemId: 3 }
    ],
    completionFeedback: "這些零散的筆記似乎在訴說著倪主任內心的掙扎：在追求自由與保持控制之間的永恆矛盾。"
  };

  const handleChoice = (choiceIndex) => {
    const currentChoices = dialogChoices[currentSection].choices;
    setFeedback(currentChoices[choiceIndex].feedback);
    setHint(currentChoices[choiceIndex].hint);
    setHasAnswered(true);
    setShowContinue(true);
  };

  const handleContinue = () => {
    if (currentSection < dialogChoices.length - 1) {
      setCurrentSection(currentSection + 1);
      setFeedback('');
      setHint('');
      setHasAnswered(false);
      setShowContinue(false);
    } else {
      setShowPuzzle(true);
    }
  };

  const handlePuzzleComplete = () => {
    setPuzzleComplete(true);
    localStorage.setItem('chapter2Complete', 'true');
  };

  const handleContinueStory = () => {
    localStorage.setItem('chapter2Complete', 'true');
    navigate('/');
  };

  return (
    <ChapterContainer>
      <Title>第二章：筆記的啟示</Title>
      
      <Paragraph>
        倪主任的辦公室內留下的不僅僅是異樣的電腦螢幕，還有一個關於他的神秘線索：一本筆記。
        這本筆記被發現在他的桌上，位置顯眼，彷彿刻意放置於此。
      </Paragraph>

      {!showPuzzle && (
        <>
          <DialogChoice
            question={dialogChoices[currentSection].question}
            context={dialogChoices[currentSection].context}
            choices={dialogChoices[currentSection].choices}
            onChoice={handleChoice}
            feedback={feedback}
            hint={hint}
            disabled={hasAnswered}
          />
          {showContinue && (
            <ContinueButton onClick={handleContinue}>
              繼續閱讀
            </ContinueButton>
          )}
        </>
      )}

      {showPuzzle && !puzzleComplete && (
        <PuzzleDrag
          puzzle={notePuzzle}
          onComplete={handlePuzzleComplete}
        />
      )}

      {puzzleComplete && (
        <>
          <PhilosophyExplanation>
            <h3>倪主任的哲學思考</h3>
            <p>
              倪主任的筆記揭示了一個深層的哲學思考：人類在追求自由與維持控制之間的永恆矛盾。
              這些零散的筆記片段，從不同角度闡述了相同的主題——人性中對自由的渴望與對秩序的需求之間的張力。
            </p>
            <p>
              《佛說四十二章經》中的「人從愛欲生憂，從憂生怖」，被倪主任重新詮釋為現代組織中的權力關係：
              人們因追求而產生依附，因依附而產生恐懼，最終在自由與控制的拉扯中迷失自我。
            </p>
            <p>
              倪主任對人性的深刻洞察，也暗示了他可能正在經歷的內在掙扎——
              作為一個制度的執行者，同時又是這個制度的質疑者。
            </p>
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

export default Chapter2; 