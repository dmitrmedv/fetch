// import UnsplashAPI from './api';

const searchForm = document.querySelector('.js-search-form');
const searchButton = document.querySelector('.js-search-button');
const box = document.querySelector('.box');

const services = [
  'абонслужба',
  'ЕХЗ',
  'Коржов',
  'група з  приєднань',
  'СЕУГиДВ',
  'СКБСГ',
  'СКПГА',
  'СТОВГ',
  'СУГ',
  'Сусуловський',
  'Фін. відділ',
  'Юр. відділ',
  'ВТВ',
  'Гол.інж',
  'Манишев',
  'ГРП',
  'Боєжов',
  'Ревіз. відділ',
  'АДС',
  'ГВіП',
];

// const unsplashApi = new UnsplashAPI();

// function makerMurckup(data) {
//   return data
//     .map(({ alt_description, urls: { regular } }) => {
//       return `<img src=${regular} alt=${alt_description}>`;
//     })
//     .join('');
// }

// unsplashApi.getImgs().then(data => (box.innerHTML = makerMurckup(data)));
