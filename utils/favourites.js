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

const addToFavourites = async (imgId) => {
  const container = document.getElementById('container');
  console.log(container.children);
}

export { addToFavourites };
