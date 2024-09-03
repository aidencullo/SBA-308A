const createFavourite = async (imgId) => {
  const baseUrl = 'https://api.thecatapi.com/v1/favourites';
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': CAT_API_KEY,
  };

  const data = {
    image_id: imgId,
  };

  const options = {
    headers: headers,
  };

  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });
}

const addToFavourites = async (breed) => {
  try {
    await createFavourite(imgId);
    alert('Image added to favourites');
  } catch (error) {
    alert('An error occurred while adding the image to favourites');
  }
}

export { addToFavourites };
