const t=document.querySelector(".buttons"),e=document.querySelector(".display");t.addEventListener("click",(function(t){if(t.target===t.currentTarget)return;"0"===e.textContent&&(e.textContent="");if("."===t.target.textContent&&e.textContent.includes("."))return;t.target.classList.contains("number")&&(x||(e.textContent="",x=!0),e.textContent+=t.target.textContent);"CE"===t.target.textContent&&(n="",e.textContent="0");if("DEL"===t.target.textContent&&e.textContent.length){let t=e.textContent.split("");t.pop(),e.textContent=t.join("")}"+/-"===t.target.textContent&&e.textContent&&(n=-1*Number(e.textContent),e.textContent=n);"%"===t.target.textContent&&e.textContent&&(n=Number(e.textContent)/100,e.textContent=n);t.target.classList.contains("operations")&&(n=Number(e.textContent),x=!1,r=t.target.textContent);if("="===t.target.textContent&&n)switch(o=Number(e.textContent),r){case"+":x=!1,n+=o,e.textContent=n,o=0;break;case"-":x=!1,n-=o,e.textContent=n,o=0;break;case"x":x=!1,n*=o,e.textContent=n,o=0;break;case"/":n/=o,x=!1,e.textContent=n,o=0}}));let n=null,o=null,r="",x=!0;
//# sourceMappingURL=index.21c437dc.js.map