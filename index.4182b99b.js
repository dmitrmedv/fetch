(new class{#t="https://api.unsplash.com/photos";#e="hzXQJDewFev3rtldqLMHSH-OvJ3WMgUC5G0_ok4NYvg";getImgs(){return fetch(`${this.#t}/?client_id=${this.#e}`).then((t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})).catch(console.log)}}).getImgs().then((t=>console.log(t)));
//# sourceMappingURL=index.4182b99b.js.map
