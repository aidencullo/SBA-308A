// Use the fetch API or Axios to communicate with an external web API. Use the data provided by this API to populate your application’s content and features.

const getRandomDogBtn = document.querySelector('#getRandomDogBtn');
const dogImage = document.querySelector('#dogImage');

getRandomDogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
      dogImage.src = data.message;
      dogImage.style.display = 'block';
    });
});
