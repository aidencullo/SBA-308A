const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

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

const getRandBreed = async () => {
  const breeds = await fetch(`${CAT_API}/breeds`)
  const data = await breeds.json()
  const rand = Math.floor(Math.random() * data.length)
  return data[rand].name
}

const getIncorrectGuesses = async () => {
  // const breed = await getFavorites()
  return 'standin breed'
}

const showWrongGuesses = async () => {
  const breed = await getIncorrectGuesses();
  const wrongGuesses = document.createElement('div');
  const title = document.createElement('h1');
  title.textContent = 'Wrong Guesses';
  wrongGuesses.appendChild(title);

  // Create list and list item
  const wrongGuessesList = document.createElement('ul');
  const wrongGuessesListItem = document.createElement('li');
  wrongGuessesListItem.textContent = breed;
  wrongGuessesList.appendChild(wrongGuessesListItem);
  wrongGuesses.appendChild(wrongGuessesList);

  // Append to container
  const container = document.getElementById('container');
  container.appendChild(wrongGuesses);
};

const appendFormElements = () => {
  const input = createInputElement();
  const button = createSubmitButton();
  container.appendChild(input);
  container.appendChild(button);
};

appendFormElements();
showWrongGuesses();

export { createInputElement, createSubmitButton, handleFormSubmit, appendFormElements };
