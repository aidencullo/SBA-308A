import showPhotos from './utils/cats.js';
import showOptions from './utils/breeds.js';

const container = document.querySelector('#container');

const createInputElement = () => {
  const input = document.createElement('input');
  input.type = 'number';
  input.placeholder = 'Enter number of images';
  input.id = 'numImages';
  input.style.margin = '10px';
  input.style.width = '200px';
  return input;
};

const createSubmitButton = () => {
  const button = document.createElement('button');
  button.textContent = 'Submit';
  button.addEventListener('click', handleFormSubmit);
  return button;
};

const handleFormSubmit = async () => {
  const numImages = document.querySelector('#numImages').value;
  const answer = await showPhotos(numImages);
  console.log(answer);
  showOptions(answer);
};

const appendFormElements = () => {
  const input = createInputElement();
  const button = createSubmitButton();
  container.appendChild(input);
  container.appendChild(button);
};

appendFormElements();
