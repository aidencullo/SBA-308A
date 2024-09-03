import { main } from './cats.js';

const search = document.getElementById('search');
const quantity = document.getElementById('quantity');

search.addEventListener('click', (e) => {
  main(Number(quantity.value));
});
