const CAT_FAVOURITES = 'https://api.thecatapi.com/v1/favourites';
const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

import showCats from './utils/cats.js';
import showOptions from './utils/breeds.js';

const container = document.querySelector('#container');

const getFavourites = async () => {
  const response = await fetch(CAT_FAVOURITES, {
    headers: {
      'x-api-key': CAT_API_KEY
    }
  });
  const data = await response.json();
  return data;
};

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
  const { id, name } = await showCats(numImages);
  showOptions(id, name);
};

const getRandBreed = async () => {
  const breeds = await fetch(`${CAT_API}/breeds`)
  const data = await breeds.json()
  const rand = Math.floor(Math.random() * data.length)
  return data[rand].name
}


const getIncorrectGuesses = async () => {
  const favourites = await getFavourites();
  console.log(favourites);
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
// showWrongGuesses();

const createFavourite = async (imgId) => {
  const baseUrl = 'https://api.thecatapi.com/v1/favourites';
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': CAT_API_KEY,
  };

  const data = {
    image_id: imgId,
  };

  const options = {
    headers: headers,
  };

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
}

const showFavourites = async () => {
  const favourites = await getFavourites();
  const container = document.getElementById('favourites-container');

  favourites.forEach((favourite) => {
    const img = document.createElement('img');
    img.src = favourite.image.url;
    img.style.width = '200px';
    container.appendChild(img);
  });
};

const deleteFavourites = async () => {
  const favourites = await getFavourites();
  const baseUrl = 'https://api.thecatapi.com/v1/favourites';
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': CAT_API_KEY,
  };

  favourites.forEach(async (favourite) => {
    const options = {
      method: 'DELETE',
      headers: headers,
    };

    const response = await fetch(`${baseUrl}/${favourite.id}`, options);
  });
};

const clearFavourites = async () => {
  
  const container = document.getElementById('favourites-container');
  container.innerHTML = '';
};

showFavourites();

export { appendFormElements, showFavourites, clearFavourites, deleteFavourites, createFavourite };
