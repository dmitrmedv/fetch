const e=document.querySelector(".form"),t=document.querySelector(".list");function n(){fetch("http://localhost:3000/letters").then((e=>e.json())).then((e=>t.innerHTML=e.map((({addres:e,name:t,lastname:n})=>`<li>\n<p>замовник: ${t} ${n}</p>\n<p>адреса: ${e}</p>\n</li>`)).join("")))}n(),e.addEventListener("submit",(function(e){e.preventDefault();const t={name:e.target.elements.name.value,lastname:e.target.elements.lastname.value,addres:e.target.elements.addres.value};fetch("http://localhost:3000/letters",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((()=>{n()})).finally((()=>e.target.reset()))}));
//# sourceMappingURL=index.23ae5516.js.map
