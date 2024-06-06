const box = document.querySelector('.box');
const game = document.querySelector('.game');
game.innerHTML = makeMurckup();
let subBoxes = document.querySelectorAll('.sub-box');
const overlay = document.querySelector('.overlay');
const restartButton = document.querySelector('.restart-button');
const message = document.querySelector('.message');
const test = document.querySelector('.test');

const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let winnersName = '';
let playerX = [];
let playerO = [];

const markerX =
  '<div class="markerX"><div class="stick1"></div><div class="stick2"></div></div>';
const markerO = '<div class="markerO"></div>';

let marker = markerX;

box.addEventListener('click', onclick);

function makeMurckup() {
  let maurckup = '';
  for (i = 0; i < 9; i += 1) {
    maurckup += `<div class="sub-box" data-id=${i}></div>`;
  }
  return maurckup;
}

function showModal() {
  restartButton.addEventListener('click', restart);
  setTimeout(() => {
    overlay.classList.remove('hide');
  }, 500);
}
function restart() {
  overlay.classList.add('hide');
  restartButton.removeEventListener('click', restart);
  game.innerHTML = makeMurckup();
  winnersName = '';
  playerX = [];
  playerO = [];
  subBoxes = document.querySelectorAll('.sub-box');
}

function colorWin(arr) {
  arr.forEach(element => {
    [...subBoxes][element].classList.add('winner');
  });
}

function checkWin(player) {
  return winCombinations.find(item => item.every(el => player.includes(el)));
}

function onclick(evn) {
  if (
    !evn.target.classList.contains('sub-box') ||
    evn.target.firstChild ||
    winnersName
  ) {
    return;
  }

  evn.target.innerHTML = marker;

  if (marker === markerX) {
    playerX.push(Number(evn.target.dataset.id));
  }
  if (marker === markerO) {
    playerO.push(Number(evn.target.dataset.id));
  }

  marker === markerX ? (marker = markerO) : (marker = markerX);

  if (checkWin(playerX)) {
    colorWin(checkWin(playerX));
    winnersName = 'гравець X';
    message.textContent = `виграв ${winnersName}`;
    showModal();
    return;
  }

  if (checkWin(playerO)) {
    colorWin(checkWin(playerO));
    winnersName = 'гравець O';
    message.textContent = `виграв ${winnersName}`;
    showModal();
    return;
  }

  if ([...playerO, ...playerX].length === 9) {
    message.textContent = 'Нічия...';
    showModal();
  }
}
