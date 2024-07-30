fetch('http://localhost:3000/posts')
  .then(resp => resp.json())
  .then(data => console.log(data));

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    name: 'Іванов В.І.',
    address: 'Дерибасівська, 34',
    question: 'перерахунок',
  }),
};

fetch('http://localhost:3000/posts', options)
  .then(resp => resp.json())
  .then(data => console.log(data));
fetch('http://localhost:3000/posts', options)
  .then(resp => resp.json())
  .then(data => console.log(data));
