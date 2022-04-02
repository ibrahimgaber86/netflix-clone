const API_KEY = "c52999d19ee63633ec716a73735b3570";
const URL_PARAMETER =
  "language=en-US&sort_by=popularity.desc&include_adult=false&certification.gte=r&include_video=false&page=1&with_watch_monetization_types=flatrate";

const requests = {
  netflix: `discover/tv?api_key=${API_KEY}&with_network=213&${URL_PARAMETER}`,
  trending: `/trending/all/week?api_key=${API_KEY}&${URL_PARAMETER}`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&${URL_PARAMETER}`,
  action: `/discover/movie/?api_key=${API_KEY}&with_genres=28&${URL_PARAMETER}`,
  comedy: `/discover/movie/?api_key=${API_KEY}&with_genres=35&${URL_PARAMETER}`,
  horor: `/discover/movie/?api_key=${API_KEY}&with_genres=27&${URL_PARAMETER}`,
  animation: `/discover/movie/?api_key=${API_KEY}&with_genres=16&${URL_PARAMETER}`,
  family: `/discover/movie/?api_key=${API_KEY}&with_genres=10751&${URL_PARAMETER}`,
  history: `/discover/movie/?api_key=${API_KEY}&with_genres=36&${URL_PARAMETER}`,
};

export default requests;
