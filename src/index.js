import UnsplashAPI from './api';

const unsplashApi = new UnsplashAPI();

unsplashApi.getImgs().then(data => console.log(data));
