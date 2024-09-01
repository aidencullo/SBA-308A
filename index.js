const dogImage = document.querySelector('#dogImage');
const dogStatus = document.querySelector('#dogStatus');

const getRandomDog = async () => {
  try {
    dogStatus.textContent = 'Loading...';
    dogImage.src = '';
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    dogImage.src = data.message;
    dogStatus.textContent = '';
  } catch (error) {
    dogImage.src = 'https://via.placeholder.com/300';
  }
};

getRandomDog();

getRandomDogBtn.addEventListener('click', getRandomDog);
