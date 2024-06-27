import UnsplashAPI from './api';
import Masonry from 'masonry-layout';
// import InfiniteScroll from 'infinite-scroll';

const gallery = document.querySelector('.gallery');
const card = document.querySelector('.card');

const form = document.querySelector('.search-form');

form.addEventListener('submit', onSubmit);

const unsplashAPI = new UnsplashAPI();

function makeCard(data) {
  console.log(data);
  return data
    .map(({ urls: { small }, alt_description }) => {
      return `<div class="photo-card">
              <img src=${small} alt=${alt_description} loading="lazy" />
            </div>`;
    })
    .join('');
}

function onSubmit(even) {
  even.preventDefault();
  unsplashAPI.query = even.target.elements.searchQuery.value;
  even.target.reset();
  unsplashAPI.getImgs().then(({ results }) => {
    gallery.innerHTML = makeCard(results);
    var msnry = new Masonry(gallery);
  });
}

// let infScroll = new InfiniteScroll('.gallery', {
//   path: '.pagination__next',
//   append: '.post',
//   history: false,
// });
