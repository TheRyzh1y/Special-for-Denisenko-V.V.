function addNumbers() {
  const elements = document.querySelectorAll('.r');
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.innerHTML += ' ' + (i + 1);
    element.style.fontWeight = 'bold';
  }
  
  const button = document.querySelector('button');
  button.disabled = true;
}