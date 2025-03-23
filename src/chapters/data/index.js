import chapter1 from './chapter1';
import chapter4 from './chapter4';
import chapter5 from './chapter5';
import chapter6 from './chapter6';

const chapters = {
  1: chapter1,
  4: chapter4,
  5: chapter5,
  6: chapter6
};

export const getChapter = (id) => {
  if (!id) return null;
  const numericId = parseInt(id);
  if (isNaN(numericId)) return null;
  return chapters[numericId] || null;
};

export const getNextChapter = (currentId) => {
  if (!currentId) return null;
  const numericId = parseInt(currentId);
  if (isNaN(numericId)) return null;
  const nextId = numericId + 1;
  return chapters[nextId] ? nextId : null;
};

export const getPreviousChapter = (currentId) => {
  if (!currentId) return null;
  const numericId = parseInt(currentId);
  if (isNaN(numericId)) return null;
  const prevId = numericId - 1;
  return chapters[prevId] ? prevId : null;
};

export default chapters; 