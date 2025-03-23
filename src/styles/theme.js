import { keyframes, css } from 'styled-components';

// 顏色主題
export const colors = {
  primary: '#1a1a1a',
  secondary: '#2c2420',
  accent: '#8b7355',
  rust: '#8b4513',
  darkGreen: '#2f4f4f',
  gold: '#b8860b',
  text: {
    primary: '#e0e0e0',
    secondary: '#cccccc',
    accent: '#d4af37'
  }
};

// 動畫效果
export const animations = {
  filmGrain: keyframes`
    0%, 100% { opacity: 0.9; }
    10% { opacity: 0.8; }
    20% { opacity: 0.7; }
    30% { opacity: 0.85; }
    40% { opacity: 0.75; }
    50% { opacity: 0.9; }
    60% { opacity: 0.8; }
    70% { opacity: 0.7; }
    80% { opacity: 0.85; }
    90% { opacity: 0.75; }
  `,
  
  flicker: keyframes`
    0% { opacity: 0.95; }
    5% { opacity: 0.85; }
    10% { opacity: 0.9; }
    15% { opacity: 0.85; }
    20% { opacity: 0.95; }
    25% { opacity: 0.85; }
    30% { opacity: 0.9; }
    35% { opacity: 0.95; }
    40% { opacity: 0.85; }
    45% { opacity: 0.9; }
    50% { opacity: 0.95; }
    55% { opacity: 0.85; }
    60% { opacity: 0.9; }
    65% { opacity: 0.85; }
    70% { opacity: 0.95; }
    75% { opacity: 0.9; }
    80% { opacity: 0.85; }
    85% { opacity: 0.9; }
    90% { opacity: 0.95; }
    95% { opacity: 0.85; }
    100% { opacity: 0.9; }
  `,

  textReveal: keyframes`
    from {
      opacity: 0;
      transform: translateY(20px);
      filter: blur(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
  `
};

// 混合效果
export const mixins = {
  filmGrainEffect: css`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
      opacity: 0.1;
      pointer-events: none;
      animation: ${animations.filmGrain} 8s steps(10) infinite;
    }
  `,

  flickerEffect: css`
    animation: ${animations.flicker} 4s infinite;
  `,

  textRevealEffect: css`
    animation: ${animations.textReveal} 0.8s ease-out forwards;
  `,

  oldPaperTexture: css`
    background-image: 
      linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  `
};

// 響應式設計斷點
export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1024px'
};

// 陰影效果
export const shadows = {
  text: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  box: '0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
  inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.2)'
};

// 字體設定
export const typography = {
  primary: "'Noto Serif TC', serif",
  secondary: "'Playfair Display', serif"
};

// 全局樣式混合
export const globalMixins = css`
  body {
    background-color: ${colors.primary};
    color: ${colors.text.primary};
    font-family: ${typography.primary};
    line-height: 1.6;
    ${mixins.filmGrainEffect}
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${typography.secondary};
    color: ${colors.text.accent};
    text-shadow: ${shadows.text};
  }

  button {
    font-family: ${typography.primary};
    cursor: pointer;
    transition: all 0.3s ease;
  }
`; 