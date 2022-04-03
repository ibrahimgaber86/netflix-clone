import React, { useEffect, useState } from "react";
import { fetchMovies } from "../networkRequests/axios";
import requests from "../networkRequests/requests";
import "./banner.scss";

function trimTxt(txt = "") {
  if (txt.length > 400) {
    return txt.substring(0, 400) + "...";
  }
  return txt;
}

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    fetchMovies(requests.netflix).then((res) => {
      setMovie(res.movies[Math.floor(Math.random() * res.movies.length)]);
    });
  }, []);

  console.log(movie);
  const LINEAR_GRADIENT =
    "linear-gradient( to right ,#000,transparent,#000), linear-gradient(to bottom ,#000,rgba(0,0,0,0),#000)";
  return (
    movie && (
      <div
        className="banner"
        style={{
          backgroundImage: `${LINEAR_GRADIENT} ,url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <h1>{movie.name || movie.title || movie.original_title}</h1>
        <p>{trimTxt(movie.overview)}</p>
      </div>
    )
  );
}

export default Banner;
