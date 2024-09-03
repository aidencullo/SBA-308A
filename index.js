import showPhotos from './utils/cats.js';
import showOptions from './utils/breeds.js';

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
    showPhotos(numImages);
    showOptions(numImages);
  });
  container.appendChild(input);
  container.appendChild(button);
};

const clearScreen = () => {
  container.innerHTML = '';
};

getNumImages();
