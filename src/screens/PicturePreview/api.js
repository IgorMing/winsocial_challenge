import Axios from 'axios';

const BASE_URL = 'https://kairosapi-karios-v1.p.rapidapi.com';
const API_KEY = 'a5c80d8965msh62ab4e3ac281cc7p12634fjsnc5c477a0b6cd';

const instance = Axios.create({
  baseURL: BASE_URL,
  timeout: 6000,
  headers: {
    'x-rapidapi-host': 'kairosapi-karios-v1.p.rapidapi.com',
    'x-rapidapi-key': API_KEY,
    'content-type': 'application/json',
    accept: 'application/json',
    useQueryString: true,
  },
});

export async function fetchPictureInfo(imageUri) {
  try {
    const response = await instance.post('/detect', {
      image: imageUri,
      selector: 'ROLL',
    });
    console.log(response.data.status);
    console.log(response.data.images);
    return Promise.resolve({});
  } catch (err) {
    return Promise.reject(err);
  }
}
