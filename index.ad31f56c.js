!function(){var n=document.querySelector(".list"),t=document.querySelector(".counter"),e=document.querySelector(".js-guard"),c=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(o+=1,r().then((function(t){n.insertAdjacentHTML("beforeend",a(t)),t.info.pages===o&&c.unobserve(e)})))}))}),{root:null,rootMargin:"200px"}),o=1;function r(){return fetch("".concat("https://rickandmortyapi.com/api/character","?page=").concat(o)).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))}function a(n){return t.innerHTML="<p>".concat(o," of ").concat(n.info.pages,"</p>"),n.results.map((function(n){var t=n.id,e=n.name,c=n.image;return'<li class="card" data-id='.concat(t,">\n                <img src=").concat(c," alt=").concat(e,' />\n                <p class="name">').concat(e,"</p>\n              </li>")})).join("")}r().then((function(t){n.insertAdjacentHTML("beforeend",a(t)),c.observe(e)}))}();
//# sourceMappingURL=index.ad31f56c.js.map
