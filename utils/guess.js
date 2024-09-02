const DOG_API = 'https://api.thedogapi.com/v1';
const CAT_API = 'https://api.thecatapi.com/v1';
const BREEDS = 'https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=1'

const container = document.querySelector("#container")

const clear = () => {
  container.innerHTML = ""
}

const main = async () => {
  clear()
  const dogs = getDogs(10, 1)
  dogs.then(response => response.json())
    .then(data => {
      data.forEach(dog => {
	container.appendChild(createDogElement(dog))
      })
    })
}

const getDogs = async (limit, breed_id) => {
  return fetch(`${DOG_API}/images/search?limit=${limit}&breed_ids=${breed_id}`)
}

const createDogElement = (dog) => {
  const img = document.createElement("img")
  img.src = dog.url
  img.width = 300
  img.height = 300
  return img
}

main();
