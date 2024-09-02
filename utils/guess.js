const DOG_API = 'https://api.thedogapi.com/v1';
const CAT_API = 'https://api.thecatapi.com/v1';
const BREEDS = 'https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=1'

const randomContainer = document.querySelector("#random-container")
randomContainer.innerHTML = ""

const dogs = fetch(BREEDS)
console.log(BREEDS)
dogs.then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(dog => {
      const img = document.createElement("img")
      img.src = dog.url
      img.style.width = "200px"
      img.style.height = "200px"
      randomContainer.appendChild(img)
    })
  })


// const initialLoad = async () => {
//   const baseUrl = `${DOG_API}/breeds`;
//   const params = new URLSearchParams({
//     limit: 1,
//   });
//   const breeds = await fetch(`${baseUrl}?${params.toString()}`);
//   const breedsJson = await breeds.json();
//   breedsJson.forEach(breed => {
//     console.log(breed.id);
//   });
// }

// initialLoad();
