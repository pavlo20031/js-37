const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "57656920-4d9e1e1d3d4841e025c43185c";
const limit = 12;
export function getImages(page) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&editors_choice=true&page=${page}&per_page=${limit}&orientation=horizontal`,
  ).then((res) => res.json());
}
