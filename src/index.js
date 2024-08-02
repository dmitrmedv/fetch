const { default: axios } = require('axios');

const BASE_URL = 'http://localhost:3000/letters';

const form = document.querySelector('.form');
const list = document.querySelector('.list');

let patch = false;
let currentId = null;

let count = 1;

getAllLetter().then(data => {
  if (data.length) {
    count = data[data.length - 1].number + 1;
  }
});

async function getAllLetter() {
  const { data } = await axios.get(`${BASE_URL}`);
  renderList(data);
  return data;
}

function getLetterById(letterId) {
  return axios.get(`${BASE_URL}/${letterId}`);
}

async function addLetter(newLetter) {
  await axios.post(`${BASE_URL}`, newLetter);
  getAllLetter();
}

function deleteLetterById(letterId) {
  return axios.delete(`${BASE_URL}/${letterId}`);
}

function patchLetter(letterId, chengesForLetter) {
  return axios.patch(`${BASE_URL}/${letterId}`, chengesForLetter);
}

form.addEventListener('submit', onSubmit);
list.addEventListener('click', del);

async function onSubmit(e) {
  e.preventDefault();
  const { name, lastname, addres } = e.target.elements;
  const letter = {
    number: count,
    name: name.value,
    lastname: lastname.value,
    addres: addres.value,
  };
  if (patch) {
    document.querySelector('.btn').textContent = 'Відправити';
    await patchLetter(currentId, {
      name: name.value,
      lastname: lastname.value,
      addres: addres.value,
    });
    await getAllLetter();
    patch = false;
  } else {
    await addLetter(letter);
    count += 1;
  }
  e.target.reset();
}

function makeMurkupList(data) {
  return data
    .map(({ name, lastname, addres, id, number }) => {
      return `<li>
                <p>${number}к</p>
                <p>${name} ${lastname}</p>
                <p>${addres}</p>
                <button type="button" data-id=${id} class=del-btn>delete</button>
                <button type="button" data-id=${id} class=patch-btn>редагувати</button>
            </li>`;
    })
    .join('');
}

function renderList(data) {
  sortData = [...data];
  sortData.sort((a, b) => b.number - a.number);
  list.innerHTML = makeMurkupList(sortData);
}

async function del(e) {
  if (e.target.classList.contains('del-btn')) {
    const { id } = e.target.dataset;
    await deleteLetterById(id);
    getAllLetter();
    return;
  }
  if (e.target.classList.contains('patch-btn')) {
    patch = true;
    document.querySelector('.btn').textContent = 'Зберегти зміни';
    const { id } = e.target.dataset;
    const {
      data: { name, lastname, addres },
    } = await getLetterById(id);
    form.elements.name.value = name;
    form.elements.lastname.value = lastname;
    form.elements.addres.value = addres;
    currentId = id;
    return;
  }
}
