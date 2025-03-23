import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { colors, animations, mixins, shadows, typography } from '../styles/theme';

const DialogContainer = styled.div`
  margin: 40px 0;
  padding: 30px;
  background: ${colors.secondary}dd;
  border-radius: 12px;
  position: relative;
  animation: ${animations.textReveal} 0.5s ease-out;
  box-shadow: ${shadows.box};
  ${mixins.oldPaperTexture}
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 20px;
    width: 20px;
    height: 20px;
    background: ${colors.secondary}dd;
    transform: rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 20px;
    right: -10px;
    width: 100px;
    height: 100px;
    border: 1px solid ${colors.accent}33;
    border-radius: 50%;
    transform: rotate(-45deg);
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 20px;
    margin: 20px 0;
  }
`;

const Question = styled.div`
  font-size: 1.3em;
  margin-bottom: 25px;
  color: ${colors.text.accent};
  position: relative;
  padding-left: 20px;
  font-family: ${typography.secondary};
  text-shadow: ${shadows.text};
  ${mixins.flickerEffect}

  &::before {
    content: '?';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.8em;
    opacity: 0.5;
    color: ${colors.gold};
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    font-size: 1.1em;
    padding-left: 15px;
  }
`;

const Context = styled.div`
  font-style: italic;
  color: ${colors.text.secondary};
  margin-bottom: 25px;
  padding: 15px;
  border-left: 3px solid ${colors.accent};
  background: ${colors.primary}66;
  border-radius: 0 8px 8px 0;
  position: relative;
  ${mixins.oldPaperTexture}
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    border-right: 1px solid ${colors.accent}33;
    border-top: 1px solid ${colors.accent}33;
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 10px;
    font-size: 0.9em;
  }
`;

const choiceHover = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(8px); }
  100% { transform: translateX(0); }
`;

const ChoiceButton = styled.button`
  display: block;
  width: 100%;
  padding: 18px;
  margin: 15px 0;
  background: ${colors.primary}99;
  border: 1px solid ${colors.accent}33;
  color: ${colors.text.primary};
  text-align: left;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  font-family: ${typography.primary};
  font-size: 1.1em;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  opacity: ${props => props.disabled ? '0.6' : '1'};
  box-shadow: ${shadows.box};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${colors.accent}33;
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${props => props.disabled ? `${colors.primary}99` : `${colors.secondary}cc`};
    border-color: ${props => props.disabled ? `${colors.accent}33` : colors.gold};
    animation: ${props => props.disabled ? 'none' : css`${choiceHover} 1s infinite`};

    &::before {
      background: ${props => props.disabled ? `${colors.accent}33` : colors.gold};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 12px;
    font-size: 1em;
    margin: 10px 0;
  }
`;

const Feedback = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: ${colors.primary}99;
  border-radius: 8px;
  color: ${colors.text.secondary};
  animation: ${animations.textReveal} 0.5s ease-out;
  position: relative;
  border: 1px solid ${colors.accent}33;
  box-shadow: ${shadows.inner};
  ${mixins.oldPaperTexture}

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    width: 20px;
    height: 20px;
    border-left: 1px solid ${colors.accent}33;
    border-top: 1px solid ${colors.accent}33;
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 15px;
    margin-top: 20px;
  }
`;

const Hint = styled.div`
  margin-top: 20px;
  padding: 15px;
  font-style: italic;
  color: ${colors.text.accent};
  border-top: 1px solid ${colors.accent}33;
  animation: ${animations.flicker} 4s infinite;
  position: relative;

  &::before {
    content: '💡';
    position: absolute;
    left: -5px;
    top: -10px;
    font-size: 0.8em;
    opacity: 0.5;
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 10px;
    font-size: 0.9em;
  }
`;

const ContinueButton = styled.button`
  margin-top: 30px;
  padding: 12px 25px;
  background: ${colors.primary}99;
  border: 1px solid ${colors.accent}33;
  color: ${colors.text.primary};
  cursor: pointer;
  font-family: ${typography.primary};
  font-size: 1.1em;
  border-radius: 6px;
  box-shadow: ${shadows.box};
  ${mixins.oldPaperTexture}
  width: 100%;
  text-align: left;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${colors.accent}33;
    transition: all 0.3s ease;
  }

  &:hover {
    background: ${colors.secondary}cc;
    border-color: ${colors.gold};
    animation: ${css`${choiceHover} 1s infinite`};

    &::before {
      background: ${colors.gold};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints?.mobile || '320px'}) {
    padding: 12px;
    font-size: 1em;
  }
`;

function DialogChoice({ question, context, choices, onChoice, feedback, hint, disabled, showContinue, onContinue }) {
  return (
    <DialogContainer>
      {context && <Context>{context}</Context>}
      <Question>{question}</Question>
      {choices.map((choice, index) => (
        <ChoiceButton
          key={index}
          onClick={() => !disabled && onChoice(index)}
          disabled={disabled || feedback}
        >
          {choice.text}
        </ChoiceButton>
      ))}
      {feedback && (
        <Feedback>
          {feedback}
          {hint && <Hint>{hint}</Hint>}
        </Feedback>
      )}
      {showContinue && onContinue && (
        <ContinueButton onClick={onContinue}>
          繼續閱讀
        </ContinueButton>
      )}
    </DialogContainer>
  );
}

export default DialogChoice; 