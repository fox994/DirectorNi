import styled, { keyframes, css } from 'styled-components';

// 定義按鈕懸停動畫
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

// 定義繼續按鈕的樣式
export const ContinueButton = styled.button`
  margin: 20px auto 0; // 上下邊距和自動水平居中
  display: block; // 設置為塊級元素
  width: auto; // 自動寬度
  padding: 15px 30px; // 內邊距
  font-size: 1.1em; // 字體大小
  background: rgba(0, 0, 0, 0.3); // 背景顏色
  border: 1px solid rgba(224, 224, 224, 0.3); // 邊框樣式
  color: #e0e0e0; // 字體顏色
  cursor: pointer; // 鼠標懸停時顯示為指針
  font-family: inherit; // 繼承字體
  transition: all 0.3s ease; // 過渡效果
  position: relative; // 相對定位
  overflow: hidden; // 隱藏溢出內容
  text-align: center; // 文字居中
  min-width: 200px; // 最小寬度
  border-radius: 6px; // 邊角圓滑
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // 陰影效果
  
  // 懸停效果
  &:hover {
    background: rgba(224, 224, 224, 0.2); // 懸停時背景顏色
    border-color: rgba(224, 224, 224, 0.5); // 懸停時邊框顏色
    transform: translateY(-2px); // 懸停時向上移動
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); // 懸停時陰影效果
  }

  // 懸停時的箭頭效果
  &::before {
    content: '→'; // 箭頭符號
    position: absolute; // 絕對定位
    right: 15px; // 右邊距
    opacity: 0; // 初始透明度
    transform: translateX(-10px); // 初始位置
    transition: all 0.3s ease; // 過渡效果
  }

  // 懸停時箭頭顯示
  &:hover::before {
    opacity: 1; // 懸停時顯示箭頭
    transform: translateX(0); // 移動到原位置
  }

  // 按下時的效果
  &:active {
    transform: translateY(0); // 按下時不移動
    background: rgba(224, 224, 224, 0.3); // 按下時背景顏色
  }

  // 響應式設計
  @media (max-width: 768px) {
    padding: 15px 30px; // 響應式內邊距
    font-size: 1.1em; // 響應式字體大小
    min-width: 220px; // 響應式最小寬度
  }
`;

// 定義導航按鈕容器的樣式
export const NavigationButtons = styled.div`
  display: flex; // 使用彈性布局
  justify-content: space-between; // 兩端對齊
  margin-top: 40px; // 上邊距
  gap: 20px; // 按鈕間距
  max-width: 600px; // 最大寬度
  margin-left: auto; // 自動左邊距
  margin-right: auto; // 自動右邊距
  position: relative; // 相對定位

  // 在容器上方添加線條效果
  &::before {
    content: ''; // 空內容
    position: absolute; // 絕對定位
    top: -20px; // 上邊距
    left: 50%; // 左邊距
    transform: translateX(-50%); // 水平居中
    width: 80%; // 寬度
    height: 1px; // 高度
    background: linear-gradient(90deg, transparent, #e0e0e0, transparent); // 漸變背景
  }
`;

// 定義導航按鈕的樣式
export const NavButton = styled.button`
  background: transparent; // 背景透明
  border: 1px solid #e0e0e0; // 邊框樣式
  color: #e0e0e0; // 字體顏色
  padding: 12px 25px; // 內邊距
  cursor: pointer; // 鼠標懸停時顯示為指針
  font-family: inherit; // 繼承字體
  transition: all 0.3s ease; // 過渡效果
  position: relative; // 相對定位
  overflow: hidden; // 隱藏溢出內容
  min-width: 120px; // 最小寬度
  text-align: center; // 文字居中
  flex: 1; // 彈性布局
  border-radius: 6px; // 邊角圓滑
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); // 陰影效果

  // 懸停效果
  &::before {
    content: ''; // 空內容
    position: absolute; // 絕對定位
    top: 0; // 上邊距
    left: -100%; // 初始位置
    width: 100%; // 寬度
    height: 100%; // 高度
    background: linear-gradient(90deg, transparent, rgba(224, 224, 224, 0.1), transparent); // 漸變背景
    transition: all 0.5s ease; // 過渡效果
  }

  // 懸停時的效果
  &:hover {
    background: rgba(224, 224, 224, 0.1); // 懸停時背景顏色
    transform: translateX(0); // 懸停時不移動
    animation: ${css`${buttonHover}`} 1s infinite; // 懸停時動畫效果
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); // 懸停時陰影效果
    border-color: rgba(224, 224, 224, 0.5); // 懸停時邊框顏色

    // 懸停時的箭頭效果
    &::before {
      left: 100%; // 移動到右側
    }
  }

  // 按下時的效果
  &:active {
    transform: translateY(0); // 按下時不移動
    background: rgba(224, 224, 224, 0.2); // 按下時背景顏色
  }

  // 響應式設計
  @media (max-width: 768px) {
    padding: 15px 30px; // 響應式內邊距
    font-size: 1.1em; // 響應式字體大小
    min-width: 140px; // 響應式最小寬度
  }
`; 