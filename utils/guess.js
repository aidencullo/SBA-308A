const DOG_API = 'https://api.thedogapi.com/v1';
const CAT_API = 'https://api.thecatapi.com/v1';
const BREEDS = 'https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=1'
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

const container = document.querySelector("#container")

const clear = () => {
  container.innerHTML = ""
}

export const main = async (numDogs = 10) => {
  const breed = await getRandBreed()
  const dogs = await getDogs(numDogs, breed)
  const data = await dogs.json()
  data.forEach(dog => {
    container.appendChild(createDogElement(dog))
  })
}

const getDogs = async (limit, breed_id) => {
  const params = new URLSearchParams(
    {
      limit: limit,
      breed_ids: breed_id,
      api_key: CAT_API_KEY,
    }
  )
  return await fetch(`${CAT_API}/images/search?${params}`)
}

const getRandBreed = async () => {
  return "beng";
}

const createDogElement = (dog) => {
  const img = document.createElement("img")
  img.src = dog.url
  img.width = 300
  img.height = 300
  return img
}
