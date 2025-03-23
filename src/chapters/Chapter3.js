import React, { useState } from 'react';
import styled from 'styled-components';
import DialogChoice from '../components/DialogChoice';
import QuickTimeEvent from '../components/QuickTimeEvent';
import { useNavigate } from 'react-router-dom';
import { ContinueButton, NavigationButtons, NavButton } from '../components/styles/buttons';

const ChapterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  color: #e0e0e0;
  font-family: 'Noto Sans TC', sans-serif;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  position: relative;
  min-height: 100vh;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid rgba(224, 224, 224, 0.1);
    border-radius: 12px;
    pointer-events: none;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: justify;
`;

const QTEContainer = styled.div`
  position: relative;
  margin: 20px auto;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  
  ${props => {
    switch(props.position) {
      case 'top':
        return 'margin-top: 50px;';
      case 'middle':
        return 'margin: 100px auto;';
      case 'bottom':
        return 'margin-bottom: 50px;';
      default:
        return '';
    }
  }}
`;

const PhilosophyExplanation = styled.div`
  margin: 30px 0;
  padding: 25px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  
  h3 {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 1.3em;
  }
  
  p {
    color: #cccccc;
    line-height: 1.8;
    text-align: justify;
  }
`;

const RetryButton = styled(ContinueButton)`
  background: rgba(224, 224, 224, 0.1);
  margin-top: 30px;
`;

const Chapter3 = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [showQTE, setShowQTE] = useState(false);
  const [qtePhase, setQTEPhase] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hint, setHint] = useState('');
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showContinue, setShowContinue] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [qteSuccess, setQTESuccess] = useState([false, false, false]);
  const [showRetry, setShowRetry] = useState(false);

  const dialogChoices = [
    {
      question: "關於倪主任的效率與控制力，你的分析是？",
      context: "張衡在調查報告裡寫下，效率與控制力。倪主任以強大的執行力和冷靜著稱，他的每一次決策都如精密儀器般運作...",
      choices: [
        {
          text: "這是一種近乎完美的管理方式",
          feedback: "表面的完美往往掩蓋著深層的問題。雖然倪主任的管理效率令人稱羨，所有流程運作得無可挑剔，但你是否注意到這種近乎完美背後隱藏的殘酷規範？每個決策都可能在無聲中剝奪員工的自主性，讓人變成冷冰冰的執行者。這種看似完美的管理方式，其實正潛藏著一種非人性化的壓迫與控制，進一步削弱了團隊的彈性與創意。",
          hint: "完美的表象下可能隱藏著危機，請多留意那種難以察覺的無情與冷酷，這可能正是未來隱藏衝突的根源。"
        },
        {
          text: "這反映了他對權力的執著",
          feedback: "確實，他對效率的追求似乎源於對權力的渴望。通過控制效率，他實際上在控制著每個人。從他的話語和舉動中，你可以感受到那股想要將每個人都牢牢納入掌控範圍的強烈慾望。這不僅僅是管理方式，而更像是一場權力遊戲，他通過不斷強化控制力，將整個組織變成他獨一無二的舞台。",
          hint: "權力和控制往往是相輔相成的，細節中可能隱藏著更多有關權力運作和內部角力的線索，留意那些微妙的暗示。"
        },
        {
          text: "這種方式可能損害團隊的創造力",
          feedback: "你注意到了關鍵點。過度的控制確實可能扼殺創意和主動性，讓團隊變成純粹的執行機器。當一個領導者將效率與控制推向極致時，短期內可能會看到成果，但長期來看，這種過度管理容易扼殺創新和自主性。",
          hint: "控制與創造力往往是對立的"
        }
      ]
    },
    {
      question: "對於匿名信中的指控，你的判斷是？",
      context: "張衡仔細核對匿名信中提到的具體事實，卻發現其中不少細節查無實證...",
      choices: [
        {
          text: "這是一個精心設計的陷阱",
          feedback: "有趣的觀點。匿名信中那些過於精緻、毫無破綻的指控，看似有理有據，但反而更容易讓人懷疑這是一個精心設計的陷阱。這種陷阱可能正是有人故意佈置，用以誤導調查方向，從而讓真正的問題隱藏於迷霧之中。這些完美無缺的細節，反而顯得有些生硬，似乎是為了刻意引導你去關注某個方向而編排的。",
          hint: "過於完美的指控反而值得懷疑，這可能正是有人在故意設局。"
        },
        {
          text: "這反映了某種更深層的真相",
          feedback: "雖然表面證據不足，但這些指控似乎觸及了某個核心問題。匿名信的內容，儘管缺乏直接證據，但它在敘述上卻點出了倪主任行事中的某些不尋常之處，這些似是而非的線索或許正隱藏著更大的秘密。這種指控往往不單是攻擊個人的表象，而是試圖揭示一個隱秘的權力運作模式或內部矛盾。",
          hint: "真相往往隱藏在細節之中，背後可能有著更複雜的故事。"
        },
        {
          text: "這可能混合了真實與虛構",
          feedback: "這是個敏銳的觀察。匿名信或許正是通過混合真假信息，來達到某種特定目的。這樣的混合使得整個指控既具有一定可信度，又難以完全證實，從而達到讓人無法判斷真偽的效果。這種策略正符合現代權力鬥爭中常見的操作手法，讓調查者陷入真假難辨的困境，進而影響判斷。",
          hint: "真假難辨往往是最危險的，關注那些模糊不清但卻反覆出現的細節，它們可能正是混合真偽信息的關鍵。"
        }
      ]
    },
    {
      question: "面對最後的神秘短信，你會如何解讀？",
      context: "「張衡，迴避能解決什麼？你調查過你的內心嗎?」",
      choices: [
        {
          text: "這是一種威脅",
          feedback: "這條短信帶有明顯的威脅意味，不僅是在警告張衡要直面現實，還試圖逼迫他檢視內心的恐懼。短信中的語氣既冷峻又充滿挑釁，仿佛在撕開調查者的心理防線，讓他不得不反思自己的動機與局限。這種威脅不僅針對行動，更是對心理的一種挑戰。",
          hint: "威脅背後可能隱藏著提醒"
        },
        {
          text: "這暗示著更大的陰謀",
          feedback: "短信的語氣中透露出一種難以言喻的神秘感，讓人感覺這個案件遠比表面上所看到的複雜得多。它不僅是在質疑張衡的調查方法，更似乎在提示，背後可能存在一個龐大且隱秘的陰謀。這種暗示讓人不禁懷疑，自己是否已經捲入了一場更廣泛的權力鬥爭中，而所有表面現象都只是冰山一角。",
          hint: "個人調查可能觸及更大的真相"
        },
        {
          text: "這是對調查者的考驗",
          feedback: "這個解讀相當深刻。短信看似簡短，但其實充滿了層次感，似乎在考驗張衡是否有勇氣面對那些最隱秘、最令人不安的真相。它不僅挑戰他的調查能力，更在挑戰他的自我認知，逼迫他深入反思內心的恐懼與矛盾。這種考驗既是對個人能力的挑戰，也是整個案件深層真相的一部分。",
          hint: "真相往往需要面對自己"
        }
      ]
    }
  ];

  const qtePrompts = [
    {
      text: "第一個挑戰：一陣寒意襲來！快速點擊按鈕驅散這種不安感...",
      position: "top"
    },
    {
      text: "第二個挑戰：內心的聲音越來越清晰，點擊按鈕聆聽這個聲音...",
      position: "middle"
    },
    {
      text: "最後的挑戰：真相就在眼前，點擊按鈕直面這個答案...",
      position: "bottom"
    }
  ];

  const handleQTEComplete = (success) => {
    if (success) {
      const newQTESuccess = [...qteSuccess];
      newQTESuccess[qtePhase] = true;
      setQTESuccess(newQTESuccess);
      
      if (qtePhase < 2) {
        setTimeout(() => {
          setQTEPhase(qtePhase + 1);
          setShowRetry(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setIsComplete(true);
          setShowQTE(false);
          localStorage.setItem('chapter3Complete', 'true');
        }, 1000);
      }
    } else {
      setTimeout(() => {
        setShowRetry(true);
      }, 500);
    }
  };

  const handleRetry = () => {
    setQTESuccess([false, false, false]);
    setQTEPhase(0);
    setShowRetry(false);
  };

  const handleChoice = (choiceIndex) => {
    if (!hasAnswered) {
      const currentChoices = dialogChoices[currentSection].choices;
      setFeedback(currentChoices[choiceIndex].feedback);
      setHint(currentChoices[choiceIndex].hint);
      setHasAnswered(true);
      setShowContinue(true);
    }
  };

  const handleContinue = () => {
    if (currentSection < dialogChoices.length - 1) {
      setCurrentSection(currentSection + 1);
      setFeedback('');
      setHint('');
      setHasAnswered(false);
      setShowContinue(false);
    } else {
      setShowQTE(true);
    }
  };

  const handleContinueStory = () => {
    localStorage.setItem('chapter3Complete', 'true');
    navigate('/');
  };

  return (
    <ChapterContainer>
      <Title>第三章：困局之中</Title>
      
      <Paragraph>
        張衡的桌上堆滿了筆記、匿名信的影本以及倪主任的相關檔案，他的腦海中不停地排列組合著這些線索。
        作為調查負責人，他明白自己必須撰寫一份具有說服力的調查報告，然而每一條線索都像是錯綜複雜的迷宮，
        總讓他回到原點。
      </Paragraph>

      {!showQTE && !isComplete && (
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

      {showQTE && !isComplete && (
        <QTEContainer position={qtePrompts[qtePhase].position}>
          {!showRetry ? (
            <>
              <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
                {qtePhase === 0 && "當張衡深入調查時，突然感受到一股莫名的壓力..."}
                {qtePhase === 1 && "隨著調查深入，更多不安的感覺湧上心頭..."}
                {qtePhase === 2 && "在最後關頭，真相似乎就在眼前..."}
              </Paragraph>
              <QuickTimeEvent
                key={qtePhase}
                prompt={qtePrompts[qtePhase].text}
                timeLimit={3000}
                onComplete={handleQTEComplete}
              />
              <Paragraph style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>
                {`挑戰 ${qtePhase + 1}/3`}
              </Paragraph>
            </>
          ) : (
            <>
              <Paragraph style={{ textAlign: 'center', marginBottom: '30px' }}>
                調查過程中的壓力讓張衡暫時退縮了，但他知道必須繼續前進...
              </Paragraph>
              <RetryButton onClick={handleRetry}>
                重新挑戰
              </RetryButton>
            </>
          )}
        </QTEContainer>
      )}

      {isComplete && (
        <>
          <Paragraph>
            張衡整理完初步的調查報告，結論顯示倪主任的失蹤充滿了矛盾：匿名信無法完全站得住腳，
            但其中提到的權力操控手段，卻在多方陳述中有跡可循。
          </Paragraph>

          <Paragraph>
            就在張衡準備將報告提交時，他的手機突然震動。一條匿名訊息出現在屏幕上：
            "張衡，迴避能解決什麼？你調查過你的內心嗎?"
          </Paragraph>

          <PhilosophyExplanation>
            <h3>內心的覺醒</h3>
            <p>
              在這一刻，張衡終於明白了。那些看似零散的線索，那些難以理解的矛盾，
              都指向了一個更深層的真相：每個人都在尋找自己的答案，包括倪主任，也包括他自己。
            </p>
            <p>
              倪主任的消失，或許不僅僅是一個待解的謎題，更是一面鏡子，
              照出了每個人內心深處的恐懼與渴望。那些在夜晚出現的異象，
              是否正是我們內心的投射？
            </p>
            <p>
              當我們追尋真相的時候，是否也在尋找自己？這個調查已經不再是
              關於一個人的失蹤，而是關於每個人如何面對自己內心的困境。
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

export default Chapter3; 