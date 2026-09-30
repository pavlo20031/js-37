import { getImages } from "./js/fetch";

const listRef = document.querySelector(".list");
const btnRef = document.querySelector(".btn");

let page = 1;
let totalHits = 0;
let total = 0;

function renderImages(arr) {
  const createMarkup = arr
    .map(({ id, tags, previewURL }) => {
      return `<li id="${id}">
  <img src="${previewURL}" alt="${tags}">
</li>`;
    })
    .join("");
  listRef.insertAdjacentHTML("beforeend", createMarkup);
}

loadImages(page);

btnRef.addEventListener("click", (evt) => {
  page++;
  loadImages(page);
});

function loadImages(page) {
  getImages(page).then((res) => {
    totalHits = res.totalHits;
    total += res.hits.length;

    renderImages(res.hits);

    if (total >= totalHits) {
      btnRef.style.display = "none";
    }
  });
}
