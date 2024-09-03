# Cat Breed Guessing Game

This is a web application that challenges users to guess cat breeds based on images retrieved from The Cat API. It also keeps track of incorrect guesses and displays them to the user.

## Features

- **Guess the Cat Breed**: The app fetches cat images, and users can guess the breed. It provides options for breeds, and users must select the correct one.
- **Track Incorrect Guesses**: If a user guesses incorrectly, the app will keep track of their wrong guesses and display them.

## How It Works

1. **Initial Setup**:
   - The app uses `fetch` to get cat breeds and images from The Cat API.
   - Users can input the number of images they'd like to guess from.

2. **Guessing the Breed**:
   - After submitting the number of images, the app displays the images and possible breed options.
   - Users can make their guesses, and incorrect guesses are recorded.

3. **Wrong Guesses**:
   - The app creates a list of wrong guesses and displays them under a "Wrong Guesses" section.

## API Integration

This app uses the following endpoints from The Cat API:

- **GET /breeds**: Fetches a list of cat breeds.
- **GET /favourites**: Retrieves the user's favorite cat images.
- **
