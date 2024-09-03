const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

const container = document.querySelector("#container")

const clear = () => {
  container.innerHTML = ""
}

const showCats = async (numDogs = 10) => {
  clear()
  const { id: breed, name } = await getRandBreed()
  const dogs = await getDogs(numDogs, breed)
  const data = await dogs.json()
  data.forEach(dog => {
    container.appendChild(createDogElement(dog))
  })
  return name
}

const getDogs = async (limit, breed_id) => {
  const sanitizedLimit = limit > 0 ? limit : 1
  const params = new URLSearchParams(
    {
      limit: sanitizedLimit,
      breed_ids: breed_id,
      api_key: CAT_API_KEY,
    }
  )
  return await fetch(`${CAT_API}/images/search?${params}`)
}

const getRandBreed = async () => {
  const breeds = await fetch(`${CAT_API}/breeds`)
  const data = await breeds.json()
  const rand = Math.floor(Math.random() * data.length)
  return {
    id: data[rand].id,
    name: data[rand].name
  }
}

const createDogElement = (dog) => {
  const img = document.createElement("img")
  img.src = dog.url
  img.width = 300
  img.height = 300
  return img
}

export default showCats
