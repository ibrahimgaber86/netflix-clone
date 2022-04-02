import React, { useEffect, useState } from "react";
import { fetchMovies } from "../networkRequests/axios";

import "./row.scss";

function Row({ title, url }) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetchMovies(url).then((res) => {
      setMovies(res.movies);
      console.table(res.movies);
    });
  }, [url]);

  return (
    <div className="row">
      <h1>{title.toUpperCase()}</h1>
      <ul className="movie-list">
        {movies.map((m) => (
          <div className="movie">
            <h3 className="movie-title">{m.original_title}</h3>
            <img
              src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
              alt={m.original_title}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Row;
