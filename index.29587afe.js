const e=document.querySelector(".list"),n=document.querySelector(".counter"),t=document.querySelector(".js-guard");let r=new IntersectionObserver((function(n){n.forEach((n=>{n.isIntersecting&&(o+=1,c().then((n=>{e.insertAdjacentHTML("beforeend",a(n)),n.info.pages===o&&r.unobserve(t)})))}))}),{root:null,rootMargin:"200px"}),o=1;function c(){return fetch(`https://rickandmortyapi.com/api/character?page=${o}`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))}function a(e){return n.innerHTML=`<p>${o} of ${e.info.pages}</p>`,e.results.map((({id:e,name:n,image:t})=>`<li class="card" data-id=${e}>\n                <img src=${t} alt=${n} />\n                <p class="name">${n}</p>\n              </li>`)).join("")}c().then((n=>{e.insertAdjacentHTML("beforeend",a(n)),r.observe(t)}));
//# sourceMappingURL=index.29587afe.js.map
