export default class UnsplashAPI {
  #BASE_URL = `https://api.unsplash.com/`;
  #ACCESS_KEY = 'hzXQJDewFev3rtldqLMHSH-OvJ3WMgUC5G0_ok4NYvg';

  query = null;
  page = 1;

  async getImgs() {
    const searchParams = new URLSearchParams({
      client_id: this.#ACCESS_KEY,
      query: this.query,
      page: this.page,
    });

    try {
      const response = await fetch(
        `${this.#BASE_URL}search/photos/?${searchParams}`
      );
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return await response.json();
    } catch (data) {
      return console.log(data);
    }
  }
}
