import React from 'react';
import styled from 'styled-components';
import { colors, mixins, shadows } from '../styles/theme';

const CompleteModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${colors.secondary}dd;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid ${colors.accent}33;
  box-shadow: ${shadows.box};
  z-index: 1000;
  max-width: 500px;
  width: 90%;
  ${mixins.oldPaperTexture}
`;

const ModalTitle = styled.h2`
  color: ${colors.text.accent};
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5em;
`;

const ModalContent = styled.div`
  color: ${colors.text.secondary};
  text-align: center;
  margin-bottom: 25px;
  line-height: 1.6;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid ${colors.accent}33;
  border-radius: 6px;
  background: ${props => props.primary ? colors.accent : 'transparent'};
  color: ${props => props.primary ? colors.text.primary : colors.text.secondary};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1em;

  &:hover {
    background: ${props => props.primary ? colors.accent : colors.accent}33;
    transform: translateY(-2px);
    box-shadow: ${shadows.box};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

const ChapterComplete = ({ isOpen, onClose, onComplete, chapterTitle }) => {
  if (!isOpen) return null;

  const handleComplete = () => {
    localStorage.setItem(`chapter${chapterTitle.split('：')[0].replace('第', '').replace('章', '')}Complete`, 'true');
    onComplete();
    onClose();
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <CompleteModal>
        <ModalTitle>章節完成確認</ModalTitle>
        <ModalContent>
          你已經完成了 {chapterTitle} 的所有內容。
          <br />
          是否確認完成此章節？
        </ModalContent>
        <ButtonGroup>
          <Button onClick={onClose}>
            繼續探索
          </Button>
          <Button primary onClick={handleComplete}>
            確認完成
          </Button>
        </ButtonGroup>
      </CompleteModal>
    </>
  );
};

export default ChapterComplete; 