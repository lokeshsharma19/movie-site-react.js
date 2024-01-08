import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MovieList.module.css";

function MovieList({ data }) {
  const { movieApiResponse, isError, error } = data;
  if (isError) {
    return <h1>{error}</h1>;
  }
  if (movieApiResponse && movieApiResponse.Response === "False") {
    return <p>{movieApiResponse.Error || "No Result Found"}</p>;
  }
  return (
    <div className={`container ${styles.moviesList}`}>
      {movieApiResponse.Search.map((movie) => {
        return <MovieCard key={movie.imdbID} {...movie} />;
      })}
    </div>
  );
}

export default MovieList;
