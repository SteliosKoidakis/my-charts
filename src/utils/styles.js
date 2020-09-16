const attachStyles = (shadow, styles) => {
  const style = document.createElement('style');
  style.textContent = styles;
  shadow.appendChild(style);
};

export { attachStyles };
