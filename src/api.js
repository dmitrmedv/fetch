export default class UnsplashAPI {
  #BASE_URL = `https://api.unsplash.com/photos`;
  #ACCESS_KEY = 'hzXQJDewFev3rtldqLMHSH-OvJ3WMgUC5G0_ok4NYvg';

  getImgs() {
    return fetch(`${this.#BASE_URL}/?client_id=${this.#ACCESS_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(console.log);
  }
}
