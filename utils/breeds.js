import { appendFormElements, clearFavourites, showFavourites } from "../index.js";
import { addToFavourites } from "./favourites.js";

const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

const container = document.querySelector("#container")
const options = document.querySelector("#options")

const showOptions = async (id, name) => {
  const breeds = await getRandBreeds();
  breeds.push(name)

  breeds.forEach(breed => {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "breed";  // All radio buttons share the same name attribute
    radioInput.value = breed;

    const label = document.createElement("label");
    label.textContent = breed;

    options.appendChild(radioInput);
    options.appendChild(label);

    options.appendChild(document.createElement("br"));
  });

  // Create a submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.onclick = async () => {
    const selected = document.querySelector('input[name="breed"]:checked').value;
    if (selected === name) {
      alert("Correct!");
    } else {
      alert(`Incorrect. The correct name is ${name}.`);
      await addToFavourites(id);
    }
    restart();
  };
  options.appendChild(submitButton);
};

const restart = () => {
  container.innerHTML = "";
  options.innerHTML = "";
  appendFormElements();
  clearFavourites();
  showFavourites();
};

const getRandBreed = async () => {
  const breeds = await fetch(`${CAT_API}/breeds`)
  const data = await breeds.json()
  const rand = Math.floor(Math.random() * data.length)
  return data[rand].name
}

const getRandBreeds = async () => {
  return Promise.all(Array.from({length: 3}, async () => await getRandBreed()))
}

export default showOptions
