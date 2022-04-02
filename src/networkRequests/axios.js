import axios from "axios";

import requests from "./requests";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export async function fetchNetFlix() {
  const movies = axiosInstance
    .get(requests.netflix)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}

export async function fetchAction() {
  const movies = axiosInstance
    .get(requests.action)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
export async function fetchComedy() {
  const movies = axiosInstance
    .get(requests.comedy)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
export async function fetchDocumentary() {
  const movies = axiosInstance
    .get(requests.doc)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
export async function fetchHoror() {
  const movies = axiosInstance
    .get(requests.horor)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
export async function fetchRomance() {
  const movies = axiosInstance
    .get(requests.romance)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
export async function fetchTopRated() {
  const movies = axiosInstance
    .get(requests.topRated)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
export async function fetchTrending() {
  const movies = axiosInstance
    .get(requests.trending)
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
  return movies;
}
