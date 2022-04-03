import React, { useEffect, useState } from "react";
import { fetchMovies } from "../networkRequests/axios";

import "./row.scss";

function Row({ title, url, main }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies(url).then((res) => {
      setMovies(res.movies);
    });
  }, [url]);

  return (
    <div className="row">
      <h2 className={`${main ? "red" : ""}`}>{title.toUpperCase()}</h2>
      <ul className="movie-list">
        {movies.map((m) => (
          <div className={`movie ${main ? "movie-lg" : ""}`} key={m.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
              alt={m.original_title}
            />
            <h3 className="movie-title">{m.original_title}</h3>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Row;
