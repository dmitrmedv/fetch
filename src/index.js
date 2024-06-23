const list = document.querySelector('.list');
// const loadMoreButton = document.querySelector('.load-more');
const counter = document.querySelector('.counter');
const guard = document.querySelector('.js-guard');

const BASE_URL = 'https://rickandmortyapi.com/api/character';

const options = {
  root: null,
  rootMargin: '200px',
};
let observer = new IntersectionObserver(loadMore, options);
let page = 1;

getCharacter().then(data => {
  list.insertAdjacentHTML('beforeend', makeRander(data));

  observer.observe(guard);
});

function loadMore(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      getCharacter(page).then(data => {
        list.insertAdjacentHTML('beforeend', makeRander(data));
        if (data.info.pages === page) {
          observer.unobserve(guard);
        }
      });
    }
  });
}

function getCharacter() {
  return fetch(`${BASE_URL}?page=${page}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

function makeRander(data) {
  counter.innerHTML = `<p>${page} of ${data.info.pages}</p>`;

  return data.results
    .map(({ id, name, image }) => {
      return `<li class="card" data-id=${id}>
                <img src=${image} alt=${name} />
                <p class="name">${name}</p>
              </li>`;
    })
    .join('');
}
