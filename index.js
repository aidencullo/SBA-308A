const dogImage = document.querySelector('#dogImage');
const dogStatus = document.querySelector('#dogStatus');

const LOADING_DOG_IMAGE = 'https://via.placeholder.com/300';
const RANDOM_DOG_API = 'https://dog.ceo/api/breeds/image/random';
const LOADING_MESSAGE = 'Your dog is loading...';

const getRandomDog = async () => {
  try {
    dogStatus.textContent = LOADING_MESSAGE;
    dogImage.src = '';
    dogImage.style.height = '0';
    dogImage.style.width = '0';
    const response = await fetch(RANDOM_DOG_API);
    const data = await response.json();
    dogImage.style.height = '200px';
    dogImage.style.width = '200px';
    dogImage.src = data.message;
    dogStatus.textContent = '';
  } catch (error) {
    dogImage.src = LOADING_DOG_IMAGE;
  }
};

getRandomDog();

getRandomDogBtn.addEventListener('click', getRandomDog);
