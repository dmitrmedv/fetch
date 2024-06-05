const box = document.querySelector('.box');
const subBoxes = document.querySelectorAll('.sub-box');

console.log(subBoxes);

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

let playerX = [];
let playerO = [];

const markerX =
  '<div class="markerX"><div class="stick1"></div><div class="stick2"></div></div>';
const markerO = '<div class="markerO"></div>';

let marker = markerX;

box.innerHTML = makeMurckup();

box.addEventListener('click', onclick);

function makeMurckup() {
  let maurckup = '';
  for (i = 0; i < 9; i += 1) {
    maurckup += `<div class="sub-box" data-id=${i}></div>`;
  }
  return maurckup;
}

function checkWin(player) {
  return winCombinations.find(item => item.every(el => player.includes(el)));
}

function onclick(evn) {
  if (!evn.target.classList.contains('sub-box') || evn.target.firstChild) {
    return;
  }
  evn.target.innerHTML = marker;
  console.log(evn.target);
  if (marker === markerX) {
    playerX.push(Number(evn.target.dataset.id));
    if (playerX.length === 5) {
      console.log('Ніхуя...');
      return;
    }
    if (checkWin(playerX)) {
      console.log('playerX winner');
    }
    marker = markerO;
    return;
  }
  playerO.push(Number(evn.target.dataset.id));
  if (checkWin(playerO)) {
    console.log('playerO winner');
  }

  marker = markerX;
}
