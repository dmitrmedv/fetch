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

  if (evn.target.textContent === '.') {
    if (display.textContent.includes('.')) {
      display.textContent = '0.';
      return;
    }
    display.textContent = display.textContent + '.';
  }

  if (evn.target.classList.contains('number')) {
    if (!newNumber || display.textContent === '0') {
      display.textContent = '';
      newNumber = true;
    }
    display.textContent += evn.target.textContent;
  }
  if (evn.target.textContent === 'CE') {
    a = '';
    display.textContent = '0';
  }
  if (evn.target.textContent === 'DEL' && display.textContent !== '0') {
    let arr = display.textContent.split('');
    arr.pop();
    if (arr.length === 0) {
      display.textContent = '0';
      return;
    }
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
        Number.isInteger(a) ? a : (a = a.toFixed(9));
        display.textContent = Number(a);
        b = 0;
        break;
      case '-':
        newNumber = false;
        a = a - b;
        Number.isInteger(a) ? a : (a = a.toFixed(9));
        display.textContent = Number(a);
        b = 0;
        break;
      case 'x':
        newNumber = false;
        a = a * b;
        Number.isInteger(a) ? a : (a = a.toFixed(9));
        display.textContent = Number(a);
        b = 0;
        break;
      case '/':
        a = a / b;
        Number.isInteger(a) ? a : (a = a.toFixed(9));
        console.log(Number.isInteger(a));
        newNumber = false;
        display.textContent = Number(a);
        console.log(a);
        b = 0;
        break;
    }
  }
}
