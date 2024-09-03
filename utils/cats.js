const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

const container = document.querySelector("#container")

const clear = () => {
  container.innerHTML = ""
}

export const main = async (numDogs = 10) => {
  await clear()
  const breed = await getRandBreed()
  writeToAnswer(breed)
  const dogs = await getDogs(numDogs, breed)
  const data = await dogs.json()
  data.forEach(dog => {
    container.appendChild(createDogElement(dog))
  })
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
  return data[rand].id
}

const createDogElement = (dog) => {
  const img = document.createElement("img")
  img.src = dog.url
  img.width = 300
  img.height = 300
  return img
}

const writeToAnswer = (breed) => {
  const answer = document.getElementById("answer")
  answer.style.display = "none"
  answer.innerText = breed
}
