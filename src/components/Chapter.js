import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import DialogChoice from './DialogChoice';
import ChapterComplete from './ChapterComplete';

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

const buttonHover = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

const ChapterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
  animation: ${css`${fadeIn}`} 1s ease-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: 3px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #e0e0e0, transparent);
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    right: -50px;
    width: 100px;
    height: 100px;
    border: 2px solid rgba(224, 224, 224, 0.1);
    border-radius: 50%;
    transform: rotate(-45deg);
  }
`;

const ChapterTitle = styled.h2`
  font-size: 2.5em;
  margin-bottom: 40px;
  color: #e0e0e0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  position: relative;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e0e0e0);
  }

  &::before {
    left: 20%;
  }

  &::after {
    right: 20%;
    transform: rotate(180deg);
  }
`;

const Content = styled.div`
  font-size: 1.2em;
  line-height: 1.8;
  color: #cccccc;
  text-align: justify;
  white-space: pre-line;
  margin-bottom: 40px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(224, 224, 224, 0.1);
    border-radius: 8px;
    pointer-events: none;
  }
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
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
    background: linear-gradient(90deg, transparent, #e0e0e0, transparent);
  }
`;

const NavButton = styled.button`
  background: transparent;
  border: 1px solid #e0e0e0;
  color: #e0e0e0;
  padding: 12px 25px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(224, 224, 224, 0.1), transparent);
    transition: all 0.5s ease;
  }

  &:hover {
    background: rgba(224, 224, 224, 0.1);
    transform: translateX(0);
    animation: ${css`${buttonHover}`} 1s infinite;

    &::before {
      left: 100%;
    }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    animation: none;
  }
`;

const HomeButton = styled(NavButton)`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 100;
  padding: 10px 20px;
  border-radius: 4px;
  
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 30px;
    height: 30px;
    border: 1px solid rgba(224, 224, 224, 0.1);
    border-radius: 50%;
    transform: scale(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scale(1);
  }
`;

const ContinueButton = styled(NavButton)`
  margin: 20px auto 0;
  display: block;
  width: auto;
  padding: 15px 30px;
  font-size: 1.1em;
  background: rgba(0, 0, 0, 0.3);
  border-color: rgba(224, 224, 224, 0.3);
  
  &:hover {
    background: rgba(224, 224, 224, 0.2);
    border-color: rgba(224, 224, 224, 0.5);
  }

  &::before {
    content: '→';
    position: absolute;
    right: 15px;
    opacity: 0;
    transform: translateX(-10px);
    transition: all 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PhilosophyExplanation = styled.div`
  margin-top: 40px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  position: relative;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(224, 224, 224, 0.1);
    border-radius: 8px;
    pointer-events: none;
  }

  h3 {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: #e0e0e0;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2em;
    line-height: 1.8;
    color: #cccccc;
    text-align: justify;
  }
`;

function Chapter() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [showConclusion, setShowConclusion] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  const questions = {
    1: [
      {
        context: '行政大樓中人人皆知的倪主任，以高效率與精準掌控局勢著稱。他總是散發著一種難以言喻的壓迫感，讓人既敬佩又畏懼。',
        question: '你對倪主任的第一印象是什麼？',
        choices: [
          {
            text: '我敬佩他的效率與決斷力。',
            feedback: '你注意到倪主任在任何場合都表現出極高的效率與堅定決斷。他總能在最短的時間內下定決心，讓人感受到無比的力量。',
            hint: '倪主任的高效不僅是工作態度，更隱藏著他精心策劃、步步為營的手段，這正是他權力運作的核心所在。'
          },
          {
            text: '他給我的感覺總是冷漠、壓迫。',
            feedback: '你的感受觸及了倪主任隱藏在冷靜外表下的嚴厲與壓迫。他似乎能夠用冰冷的目光掌控整個房間，每個接觸過他的人都感受到那股無形的壓力。',
            hint: '此感覺正是同事們所體驗到的：一種若隱若現、看不見的線，隨時可能讓人"斷線"。'
          },
          {
            text: '他的行事風格讓人無法捉摸，充滿神秘感。',
            feedback: '你敏銳地察覺到倪主任行事總帶著神秘與難以預測的一面。他的一舉一動，似乎都有更深的計劃在背後運作。',
            hint: '這種神秘感正是後續故事中將逐漸揭示的——倪主任的真實意圖與背後可能隱藏的更大謎團。'
          }
        ]
      },
      {
        context: '某天上午，倪主任走進會議室，手持一份簡短報告，平靜而有力地宣佈計劃變更。現場氣氛瞬間凝固，同事們立刻噤聲。',
        question: '你觀察到了什麼？',
        choices: [
          {
            text: '我注意到他的每個字都精準到位。',
            feedback: '你的觀察力讓你發現，倪主任所用的語言極其精煉，每一個字都像是經過精密計算，直擊問題核心。',
            hint: '這正暗示他並非單純的管理者，而是擅長運用言語影響力和心理戰的高手。'
          },
          {
            text: '他的目光似乎能洞悉每個人的疑慮，讓人不敢發聲。',
            feedback: '你感受到他的眼神中彷彿藏著某種魔力，讓在場的每個人都無法隱藏內心的顧慮。這不僅是領導魅力，也是心理壓迫的一部分。',
            hint: '這種洞察力正是他能操控局面的關鍵，後續會讓張衡對他產生更深的疑慮。'
          },
          {
            text: '看來他早已預料到質疑，並用巧妙話語化解矛盾。',
            feedback: '你發現倪主任似乎預料到了任何可能的反對意見，他的回答既冷靜又具有說服力，讓人無法反駁。',
            hint: '這暗示他對整個會議的流程有著完美的掌控，讓人不得不懷疑他是否有更深的意圖。'
          }
        ]
      },
      {
        context: '一位年輕專員戰戰兢兢地發問關於資源壓縮可能帶來的影響，倪主任的回答則充滿威懾與暗示。',
        question: '你如何解讀這個互動？',
        choices: [
          {
            text: '我認為這展示了他對下屬的絕對控制力。',
            feedback: '你認為倪主任的回答，實際上是在強化他對下屬無所不在的控制與壓迫，讓人感覺自己似乎無法脫身。',
            hint: '這種控制力在後續將逐漸展開，讓玩家意識到即使表面上是關心，實際上卻充滿了威脅。'
          },
          {
            text: '他的回答既威脅又似關心，令人不寒而慄。',
            feedback: '你捕捉到了那微妙的矛盾：表面關懷背後隱藏著冷酷威脅。這讓人感覺他的話語正是一種心理操控。',
            hint: '此處既有暗示性的威脅，也流露出一種難以捉摸的情感，將成為案件複雜性的伏筆。'
          },
          {
            text: '看來他早已預料到質疑，並用巧妙話語化解矛盾。',
            feedback: '你注意到他的回答中包含著事前設計的答案，彷彿所有可能的問題都已在他腦中有了預案。',
            hint: '此選項強調他對現場氛圍的把控與預見性，後續將使調查者張衡更加疑惑其背後是否隱藏著更大的局。'
          }
        ]
      },
      {
        context: '一封匿名信寄到紀律委員會，內容直指倪主任的不法行為，語氣詭譎而強烈，顯示出對他的恐懼與不滿。',
        question: '你對這封匿名信有什麼看法？',
        choices: [
          {
            text: '信中直白的指控令人震驚，似乎有人親身經歷過他的威脅。',
            feedback: '你認為這封信的用詞極為直白，仿佛作者真實地受到了倪主任的壓迫，內心充滿恐懼。',
            hint: '這提供了第一個具體案例，暗示倪主任可能確實有過以權謀私的陰暗面。'
          },
          {
            text: '我覺得這封信措辭刻意，可能有人想利用它來操控局勢。',
            feedback: '你懷疑這封信的背後可能另有用意，不排除有人故意設計，試圖借此對倪主任進行攻擊。',
            hint: '此選項暗示匿名信可能不是單純的控訴，而是一場更大局勢中的佈局，為後續調查增加疑點。'
          },
          {
            text: '無論如何，這封信讓人不得不懷疑倪主任的真實面目。',
            feedback: '你認為無論信的真偽如何，信中所呈現的內容已足以讓人質疑倪主任表面之下隱藏的秘密。',
            hint: '這是推動調查的觸發點，讓張衡與玩家開始尋找更多證據來驗證匿名信中的指控。'
          }
        ]
      },
      {
        context: '紀律調查員張衡在閱讀匿名信後，內心充滿疑惑與壓抑。他覺得這封信過於直接，似乎只是個引子，而倪主任卻依然從容應對，甚至表達對張衡工作的感謝。',
        question: '你認為張衡應該如何看待這個案件？',
        choices: [
          {
            text: '我認為張衡應該深入挖掘，找出匿名信背後的真相。',
            feedback: '你的選擇顯示出對正義與真相的追求，張衡也因此決心要不放過任何線索。',
            hint: '此選項鼓勵玩家關注案件細節，提示後續會出現更多蛛絲馬跡，揭示事件背後可能的陰謀。'
          },
          {
            text: '這封信的直白讓人懷疑，它可能只是個佈局，目的是轉移視線。',
            feedback: '你質疑信中內容的可信度，認為它可能被人利用來誤導調查方向，讓真正的問題無法浮出水面。',
            hint: '此選項強調案件的複雜性，讓玩家明白即使表面上指控明顯，也可能隱藏著更深的秘密。'
          },
          {
            text: '倪主任的從容更讓人感到疑慮，他似乎早已知道調查會如何進行。',
            feedback: '你發現倪主任對調查的態度非常淡定，這反而讓人覺得他可能早已預謀好一切，對所有環節了然於心。',
            hint: '此選項讓玩家開始懷疑倪主任是否正利用這種從容來掩飾某些不可告人的秘密。'
          }
        ]
      },
      {
        context: '僅僅三天後，倪主任神秘消失。行政大樓照常運作，但他的辦公室卻呈現異常——門反鎖、桌上茶杯仍溫、電腦螢幕停留著未發送郵件草稿，上面寫著那句意味深長的話。',
        question: '你對這個詭異的場景有什麼想法？',
        choices: [
          {
            text: '這現場的每一處細節都像在暗示：倪主任並非自願離開。',
            feedback: '你認為這些細節透露出一個信息：倪主任留下的痕跡，都在默默告訴人，他的消失絕非偶然，背後可能另有隱情。',
            hint: '這選項強調現場的不尋常，提示玩家注意辦公室中每個看似平常卻充滿謎團的細節。'
          },
          {
            text: '我懷疑這是一場精心設計的局，背後或許另有他人操縱。',
            feedback: '你的猜測讓人意識到：或許這並非倪主任的逃離，而是一場事先安排好的"戲碼"，目的在於掩飾更大的陰謀。',
            hint: '此選項提示玩家在後續調查中，可能會發現更多涉及高層、資金或權力鬥爭的隱秘線索。'
          },
          {
            text: '這讓人感到毛骨悚然，真相遠比表面複雜得多。',
            feedback: '你感受到現場的詭異氛圍，這句話和各項細節讓人心生寒意，似乎一切都指向一個極為複雜且令人不安的真相。',
            hint: '此選項作為第一章的高潮提示，為整個故事留下一個開放式懸念，誘使玩家繼續探索後續章節以揭曉更多秘密。'
          }
        ]
      }
    ]
  };

  const conclusions = {
    1: {
      title: "第一章：消失的倪主任",
      content: `在這個寒冷的早晨，倪主任的辦公室依然保持著他一貫的整潔，
        但空氣中卻瀰漫著一股詭異的氛圍。電腦螢幕上未完成的文件，
        桌上整齊擺放的文件夾，還有那杯已經冷卻的咖啡，都在無聲地訴說著一個故事。
        
        倪主任的突然消失，不僅僅是一個人的失蹤，更像是打開了一個潘朵拉魔盒。
        那些平日裡被刻意忽視的細節，此刻都變得意味深長。每個人都在猜測，
        都在懷疑，但沒有人能說出真相。
        
        也許，真相就藏在這些日常的細節之中，等待著被發現。`,
      philosophicalReflection: {
        title: "權力的迷思",
        content: `在這個充滿疑問的開端，我們不禁要思考：
          權力究竟是什麼？它是一種控制的手段，還是一種保護的屏障？
          倪主任的存在，似乎總是籠罩在一層若隱若現的面紗之下。
          
          他的高效與控制力，是否正是一種自我保護的機制？
          在這個充滿競爭與壓力的環境中，每個人都在尋找自己的生存之道。
          但當我們過分追求完美的控制時，是否反而失去了最重要的東西？`
      }
    }
  };

  useEffect(() => {
    const chapterData = conclusions[id] || chapters[id];
    if (chapterData) {
      setTitle(chapterData.title);
      setContent(chapterData.content);
      // 重置所有狀態
      setQuestionIndex(0);
      setFeedback('');
      setHint('');
      setHasAnswered(false);
      setShowContinue(false);
      setShowConclusion(false);
      
      // 設置當前問題
      if (questions[id] && questions[id].length > 0) {
        setCurrentQuestion(questions[id][0]);
      } else {
        setCurrentQuestion(null);
      }
    }
  }, [id]);

  const handleChoice = (choiceIndex) => {
    if (!hasAnswered) {
      const currentChoices = questions[id][questionIndex].choices;
      setFeedback(currentChoices[choiceIndex].feedback);
      setHint(currentChoices[choiceIndex].hint);
      setHasAnswered(true);
      setShowContinue(true);
    }
  };

  const handleContinue = () => {
    if (questionIndex < questions[id].length - 1) {
      setQuestionIndex(questionIndex + 1);
      setFeedback('');
      setHint('');
      setHasAnswered(false);
      setShowContinue(false);
    } else {
      setShowConclusion(true);
    }
  };

  const handleContinueStory = () => {
    // 在返回首頁前，將當前章節標記為完成
    localStorage.setItem(`chapter${id}Complete`, 'true');
    navigate('/');
  };

  return (
    <ChapterContainer>
      <HomeButton onClick={handleContinueStory}>返回首頁</HomeButton>
      <ChapterTitle>{title}</ChapterTitle>

      {!showConclusion ? (
        <>
          <Content>
            {questions[id] && questions[id][questionIndex] && (
              <DialogChoice
                question={questions[id][questionIndex].question}
                context={questions[id][questionIndex].context}
                choices={questions[id][questionIndex].choices}
                onChoice={handleChoice}
                feedback={feedback}
                hint={hint}
                disabled={hasAnswered}
              />
            )}
          </Content>
          {showContinue && (
            <ContinueButton onClick={handleContinue}>
              繼續閱讀
            </ContinueButton>
          )}
        </>
      ) : (
        <>
          <Content>
            {conclusions[id].content}
          </Content>
          <PhilosophyExplanation>
            <h3>{conclusions[id].philosophicalReflection.title}</h3>
            <p>{conclusions[id].philosophicalReflection.content}</p>
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
}

export default Chapter; 