alert("content.js")

const popupSpan = document.createElement('p');
popupSpan.textContent = 'Initialised';

popupSpan.style.cssText = `
  position: sticky;
  top: 0;
  z-index: 999;
`;

document.body.appendChild(popupSpan);