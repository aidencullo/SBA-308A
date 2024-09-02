const randomContainer = document.querySelector("#random-container")
randomContainer.innerHTML = ""

for (let i = 0; i < 10; i++) {
  const img = document.createElement("img")
  const LOADING_DOG_IMAGE = 'https://via.placeholder.com/300';
  img.src = LOADING_DOG_IMAGE
  randomContainer.appendChild(img)
}
