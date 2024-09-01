const dogImage = document.querySelector('#dogImage');

const getRandomDog = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();

    dogImage.src = data.message;
  } catch (error) {
    console.error(error);
  }
};

getRandomDog();

getRandomDogBtn.addEventListener('click', getRandomDog);
