const dogImage = document.querySelector('#dogImage');
const loadingStatus = document.querySelector('#dogStatus');
const dogInfo = document.querySelector('#dogInfo');
const getRandomDogBtn = document.querySelector('#dog-btn');

const LOADING_DOG_IMAGE = 'https://via.placeholder.com/300';
const RANDOM_DOG_API = 'https://dog.ceo/api/breeds/image/random';
const LOADING_MESSAGE = 'Your dog is loading...';

const getRandomDog = async () => {
  try {
    startLoading();
    const data = await fetchRandomDog();
    publishDog(data);
  } catch (error) {
    dogImage.src = LOADING_DOG_IMAGE;
  }
};

const startLoading = () => {
  loadingStatus.textContent = LOADING_MESSAGE;
  dogImage.src = '';
  dogImage.style.height = '0';
  dogImage.style.width = '0';
};

const fetchRandomDog = async () => {
  const response = await fetch(RANDOM_DOG_API);
  const data = await response.json();
  return data;
};

const publishDog = (data) => {  
  dogImage.style.height = '200px';
  dogImage.style.width = '200px';
  dogImage.src = data.message;
  loadingStatus.textContent = '';
};

getRandomDog();

getRandomDogBtn.addEventListener('click', getRandomDog);
