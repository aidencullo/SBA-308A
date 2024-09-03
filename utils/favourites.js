const CAT_API_KEY = 'live_85IigfDFRAJz3RZl3AHEGeioejA1FeoZe5RpLo7Si7yYzbLATq0UWuocM3qAqRJC';



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
    const randomImageId = await getRandomImageId(breed);
    const fav = await createFavourite(randomImageId);
  } catch (error) {
    alert('An error occurred while adding the image to favourites');
  }
}

const getRandomImageId = async (breed) => {
  const baseUrl = 'https://api.thecatapi.com/v1/images/search';
  const headers = {
    'x-api-key': CAT_API_KEY,
  };

  const params = {
    breed_id: breed,
  };

  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    headers: headers,
  });
  const data = await response.json();

  return data[0].id;
}

export { addToFavourites };
