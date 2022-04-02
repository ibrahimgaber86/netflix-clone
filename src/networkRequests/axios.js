import axios from "axios";

import requests from "./requests";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export async function fetchMovies(url) {
  let result = {};
  try {
    result.movies = await axiosInstance
      .get(url)
      .then((res) => res.data.results);
  } catch (error) {
    result.error = error;
  }

  return result;
}
