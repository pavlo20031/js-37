let e=document.querySelector(".list"),t=document.querySelector(".btn"),i=1,n=0,o=0;function c(t){let i=t.map(({id:e,tags:t,previewURL:i})=>`<li id="${e}">
  <img src="${i}" alt="${t}">
</li>`).join("");e.insertAdjacentHTML("beforeend",i)}function a(e){fetch(`https://pixabay.com/api/?key=57656920-4d9e1e1d3d4841e025c43185c&editors_choice=true&page=${e}&per_page=12&orientation=horizontal`).then(e=>e.json()).then(e=>{n=e.totalHits,o+=e.hits.length,c(e.hits),o>=n&&(t.style.display="none")})}function c(t){let i=t.map(({id:e,tags:t,previewURL:i})=>`<li id="${e}">
        <img src="${i}" alt="${t}">
      </li>`).join("");e.insertAdjacentHTML("beforeend",i)}a(1),t.addEventListener("click",e=>{a(++i)});
//# sourceMappingURL=js-37.a812d22d.js.map
