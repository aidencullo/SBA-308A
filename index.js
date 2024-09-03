// import './utils/search.js';
import { main } from './utils/cats.js';

const container = document.querySelector('#container');
let numImages = 0;

const getNumImages = () => {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Enter number of images';
  input.id = 'numImages';
  input.style.margin = '10px';
  input.style.width = '200px';
  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.addEventListener('click', () => {
    const numImages = document.querySelector('#numImages').value;
    main(numImages);
  });
  container.appendChild(input);
  container.appendChild(button);
};

const clearScreen = () => {
  container.innerHTML = '';
};

getNumImages();
