let element = document.querySelector('ul').children[0].children[0];

function turnButtonRed() {
  // Add code to turn button red
  element.style.backgroundColor = 'red';
  element.style.color = 'white';
  element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed;
