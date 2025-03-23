const handleComplete = () => {
  localStorage.setItem('chapter1Complete', 'true');
  navigate('/chapter/2');
}; 