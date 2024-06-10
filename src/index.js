const buttons = document.querySelector('.buttons');
const display = document.querySelector('.display');

buttons.addEventListener('click', onClick);

let a = null;
let b = null;
let operation = '';
let newNumber = true;

function onClick(evn) {
  if (evn.target === evn.currentTarget) {
    return;
  }
  if (display.textContent === '0') {
    display.textContent = '';
  }
  if (evn.target.textContent === '.' && display.textContent.includes('.')) {
    return;
  }

  if (evn.target.classList.contains('number')) {
    if (!newNumber) {
      display.textContent = '';
      newNumber = true;
    }
    display.textContent += evn.target.textContent;
  }
  if (evn.target.textContent === 'CE') {
    a = '';
    display.textContent = '0';
  }
  if (evn.target.textContent === 'DEL' && display.textContent.length) {
    let arr = display.textContent.split('');
    arr.pop();
    display.textContent = arr.join('');
  }
  if (evn.target.textContent === '+/-' && display.textContent) {
    a = Number(display.textContent) * -1;
    display.textContent = a;
  }
  if (evn.target.textContent === '%' && display.textContent) {
    a = Number(display.textContent) / 100;
    display.textContent = a;
  }

  if (evn.target.classList.contains('operations')) {
    a = Number(display.textContent);
    newNumber = false;
    operation = evn.target.textContent;
  }

  if (evn.target.textContent === '=' && a) {
    b = Number(display.textContent);
    switch (operation) {
      case '+':
        newNumber = false;
        a = a + b;
        display.textContent = a;
        b = 0;
        break;
      case '-':
        newNumber = false;
        a = a - b;
        display.textContent = a;
        b = 0;
        break;
      case 'x':
        newNumber = false;
        a = a * b;
        display.textContent = a;
        b = 0;
        break;
      case '/':
        a = a / b;
        newNumber = false;
        display.textContent = a;
        b = 0;
        break;
    }
  }
}
