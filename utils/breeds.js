import { appendFormElements } from "../index.js";
import { addToFavourites } from "./favourites.js";

const CAT_API = 'https://api.thecatapi.com/v1';
const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';

const container = document.querySelector("#container")
const options = document.querySelector("#options")

const showOptions = async (answer) => {
  const breeds = await getRandBreeds();
  breeds.push(answer)

  breeds.forEach(breed => {
    // Create a radio input element
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = "breed";  // All radio buttons share the same name attribute
    radioInput.value = breed;

    // Create a label for the radio button
    const label = document.createElement("label");
    label.textContent = breed;
    label.htmlFor = breed;  // Associate label with radio button

    // Append the radio input and label to the container
    container.appendChild(radioInput);
    container.appendChild(label);

    // Add a line break for better spacing (optional)
    options.appendChild(document.createElement("br"));
  });

  // Create a submit button
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.onclick = async () => {
    const selected = document.querySelector('input[name="breed"]:checked').value;
    if (selected === answer) {
      alert("Correct!");
    } else {
      alert(`Incorrect. The correct answer is ${answer}.`);
    }
    await addToFavourites();
    restart();
  };
  container.appendChild(submitButton);
};

const restart = () => {
  container.innerHTML = "";
  options.innerHTML = "";
  appendFormElements();
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
