import React, { useEffect, useState } from "react";
import { fetchMovies } from "../networkRequests/axios";
import requests from "../networkRequests/requests";
import "./banner.scss";

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    fetchMovies(requests.netflix).then((res) => {
      setMovie(res.movies[Math.floor(Math.random() * res.movies.length)]);
    });
  }, []);

  console.log(movie);
  const LINEAR_GRADIENT =
    "linear-gradient( to right ,rgba(0,0,0,.9),rgba(0,0,0,.4),rgba(0,0,0,.9))";
  return (
    movie && (
      <div
        className="banner"
        style={{
          backgroundImage: `${LINEAR_GRADIENT} ,url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
        }}
      >
        <h1>{movie.name || movie.title || movie.original_title}</h1>
        <p>{movie.overview}</p>
      </div>
    )
  );
}

export default Banner;
