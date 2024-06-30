// const { default: axios } = require('axios');

// axios.get('http://localhost:3000/posts').then(({ data }) => console.log(data));

// const config = {
//   headers: {
//     'Content-type': 'applocation/json',
//   },
// };

const data = document.querySelectorAll('.data');

const tr = document.querySelector('tr');

console.log(tr.lastEllementChild);

data.forEach(item => {
  if (item.textContent.length >= 90) {
    item.textContent = item.textContent.slice(0, 100) + '...';
  }
});
