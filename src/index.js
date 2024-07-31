const form = document.querySelector('.form');
const list = document.querySelector('.list');

let count;

function getList() {
  fetch('http://localhost:3000/letters')
    .then(resp => resp.json())
    .then(data => {
      if (data.length !== 0) {
        count = data[data.length - 1].number + 1;
      } else {
        count = 1;
      }

      let dataSotr = data.sort((a, b) => b.number - a.number);
      list.innerHTML = render(dataSotr);
    });
}

getList();

form.addEventListener('submit', onSubmit);

list.addEventListener('click', deleteLetter);

function deleteLetter(e) {
  if (e.target.classList.contains('del-btn')) {
    console.log(e.target.dataset.id);
    fetch(`http://localhost:3000/letters/${e.target.dataset.id}`, {
      method: 'DELETE',
    }).then(() => getList());
  }
}

function onSubmit(e) {
  e.preventDefault();
  const message = {
    name: e.target.elements.name.value,
    lastname: e.target.elements.lastname.value,
    addres: e.target.elements.addres.value,
    number: count,
  };
  fetch('http://localhost:3000/letters', {
    method: 'POST',
    body: JSON.stringify(message),
    headers: { 'Content-Type': 'application/json' },
  })
    .then(() => {
      getList();
      count += 1;
    })
    .finally(() => {
      e.target.reset(), e.target.elements.name.focus();
    });
}

function render(arr) {
  return arr
    .map(({ addres, name, lastname, id, number }) => {
      return `<li>
   <p>вхідний номер: ${number}к</p>   
<p>замовник: ${name} ${lastname}</p>
<p>адреса: ${addres}</p>
<button type='button' class='del-btn' data-id=${id}>delete</button>
</li>`;
    })
    .join('');
}
