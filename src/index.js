const form = document.querySelector('.form');
const list = document.querySelector('.list');

function getList() {
  fetch('http://localhost:3000/letters')
    .then(resp => resp.json())
    .then(data => (list.innerHTML = render(data)));
}

getList();

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const message = {
    name: e.target.elements.name.value,
    lastname: e.target.elements.lastname.value,
    addres: e.target.elements.addres.value,
  };
  fetch('http://localhost:3000/letters', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => {
      getList();
    })
    .finally(() => e.target.reset());
}

function render(arr) {
  return arr
    .map(({ addres, name, lastname }) => {
      return `<li>
<p>замовник: ${name} ${lastname}</p>
<p>адреса: ${addres}</p>
</li>`;
    })
    .join('');
}
