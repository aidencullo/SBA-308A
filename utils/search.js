import { main } from './guess.js';

const dogNumber = document.querySelector('#dog-number');

dogNumber.addEventListener('change', (e) => {
  main(Number(e.target.value));
});
