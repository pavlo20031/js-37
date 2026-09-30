let e=document.querySelector(".list"),t=document.querySelector(".btn"),i=1,n=0,o=0;function c(i){fetch(`https://pixabay.com/api/?key=57656920-4d9e1e1d3d4841e025c43185c&editors_choice=true&page=${i}&per_page=12&orientation=horizontal`).then(e=>e.json()).then(i=>{let c;n=i.totalHits,o+=i.hits.length,c=i.hits.map(({id:e,tags:t,previewURL:i})=>`<li id="${e}">
  <img src="${i}" alt="${t}">
</li>`).join(""),e.insertAdjacentHTML("beforeend",c),o>=n&&(t.style.display="none")})}c(1),t.addEventListener("click",e=>{c(++i)});
//# sourceMappingURL=js-37.33ed9d57.js.map
