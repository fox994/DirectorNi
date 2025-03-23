import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors, animations, mixins, shadows, typography } from '../styles/theme';
import { NavButton } from './styles/buttons';

const EndingContainer = styled.div`
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
  animation: ${animations.textReveal} 1s ease-out;

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
  font-size: 2.5em;
  text-shadow: ${shadows.text};
`;

const Content = styled.div`
  line-height: 1.8;
  margin-bottom: 30px;
  text-align: justify;
  padding: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  ${mixins.oldPaperTexture}
`;

const LockedMessage = styled.div`
  text-align: center;
  padding: 40px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(224, 224, 224, 0.2);
  margin-bottom: 30px;
  
  h2 {
    color: #ff8888;
    margin-bottom: 20px;
  }
  
  p {
    color: #cccccc;
    line-height: 1.6;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  margin: 20px 0;
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
  color: #cccccc;
  margin-bottom: 10px;
`;

const Ending = () => {
  const navigate = useNavigate();
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 檢查所有章節的完成狀態
    const completedChapters = [1, 2, 3, 4, 5, 6].filter(chapter => {
      return localStorage.getItem(`chapter${chapter}Complete`) === 'true';
    });

    const progressPercentage = (completedChapters.length / 6) * 100;
    setProgress(progressPercentage);

    if (completedChapters.length === 6) {
      setIsUnlocked(true);
    }
  }, []);

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <EndingContainer>
      <Title>真相的終點</Title>
      
      {!isUnlocked ? (
        <>
          <LockedMessage>
            <h2>結局尚未解鎖</h2>
            <p>你需要完成所有章節才能解鎖這個結局。</p>
            <ProgressText>完成進度：{Math.round(progress)}%</ProgressText>
            <ProgressBar progress={progress} />
            <p>繼續探索故事，揭開所有謎題...</p>
          </LockedMessage>
        </>
      ) : (
        <Content>
          <p>
          在完成所有章節的探索後，張衡終於理解了整個事件的真相。這不僅僅是一個關於權力、控制與自由的寓言，更是一個關於自我覺醒與內心掙扎的殘酷故事。
          隨著一條條線索逐漸拼湊成真相的全景，他發現，那些在夜晚中徘徊的模糊影子，那些不斷在心頭迴盪的低語，竟無一不在映照著他內心深處的黑暗與秘密。

          </p>
          <p>
          </p>
          <p>
          倪主任的消失，從一開始就像是一個精心設計的啟示。他用那句「人總要選擇適當的時機與方式」提醒著每一個人，逼迫大家面對自己內心的恐懼與執念。
          然而，當張衡追查這一切時，他終於發現，自己在無數次冷靜分析、在每一個看似客觀的細節中，其實早已被那無形的枷鎖所束縛。
          他驚覺，自己對真相的追問，正是源於對過去無法釋懷的罪疚——那一夜，辦公室中激烈的爭吵、那聲難以遺忘的失控。
          正是張衡自己，親手終結了倪主任的存在。

          </p>
          <p>
          </p>

          <p>
          在這個充滿壓迫與矛盾的權力結構中，張衡開始明白：他自己一直都是那個被忽視的棋子，亦或是那黑暗中真正的操縱者。
          他的每一次決策、每一個疑惑與反抗，無不將他推向一個殘酷的邊緣。
          當所有的謎題最終解構，那些看似真實的線索竟逐漸指向一個令人震驚的事實——他，就是那位在深夜中親手掩蓋真相的人，是那個讓權力機制無法自拔的罪魁禍首。
          而如今，當警方無法尋獲倪主任的蹤跡，公司的調查以曠職草草結案，冷淡而詭譎的高層最終選擇以形式上的緬懷會來平息風波時，張衡內心那份冰冷的覺醒已經悄然萌生。
          他不再僅僅是那位默默追尋真相的調查員，而是逐漸接過了倪主任留給這個機構的權力火炬，成為新的倪主任——一位懂得在矛盾與黑暗中掙扎，卻又在必要時刻果斷面對現實的掌控者。

          </p>
          <p>
          </p>
          <p>
            這個故事告訴我們，有時候，最大的謎題不是外在的真相，
            而是我們如何面對內心的恐懼與渴望。當所有矛盾與壓迫化作不可言說的罪疚與選擇，唯有在那無數次自我審視與抉擇之中，才能真正領悟到——自由從來不在於外在的束縛，而在於內心的覺醒。
            正如那不斷回蕩的低語：「有憂有怖，人生才有滋味」，
            最終，在這無盡的謎題中，張衡用自己的方式，完成了一場關於真相、罪惡與救贖的殘酷淬鍊。

          </p>
        </Content>
      )}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <NavButton onClick={handleReturnHome}>
          返回首頁
        </NavButton>
      </div>
    </EndingContainer>
  );
};

export default Ending; 