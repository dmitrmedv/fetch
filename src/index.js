import axios from 'axios';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

const BASE_URL = 'https://api.thecatapi.com/v1';

axios.defaults.headers.common['x-api-key'] =
  'live_OIZnGbXg1x62BNUsObNp1IfZ3W3vdGtkswEVxumElZ87RP74YaZYIgFJyVUMoK7P';

error.hidden = true;
breedSelect.hidden = true;

getOptions();

breedSelect.addEventListener('change', onChange);

function onChange(e) {
  getCatInfo(e.target.value);
}

function getOptions() {
  axios
    .get(`${BASE_URL}/breeds`)
    .then(({ data }) => {
      breedSelect.hidden = false;
      loader.hidden = true;
      breedSelect.innerHTML = makeOptions(data);
    })
    .catch(() => {
      loader.hidden = true;
      error.hidden = false;
    });
}

function getCatInfo(breed) {
  axios
    .get(`${BASE_URL}/images/search?breed_ids=${breed}`)
    .then(({ data }) => {
      let { name, description, temperament } = data[0].breeds[0];
      let { url } = data[0];
      catInfo.innerHTML = makeCard({ name, description, temperament, url });
    })
    .catch(error => {
      console.log(error);
    });
}

function makeOptions(data) {
  return data
    .map(({ name, id }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
}

function makeCard({ name, description, temperament, url }) {
  return `<div class="cover"><img src=${url} alt=${name} /></div>
        <div class="description">
            <h2>${name}</h2>
             <p>${description}</p>
             <p>temperament: <span class="temperament">${temperament}</span></p>
        </div>`;
}
