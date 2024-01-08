import React from "react";
import SearchForm from "../components/SearchForm";
import MovieList from "../components/MovieList";
import { apiKey } from "../constants";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export async function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "marvel";
  try {
    const movieSearchEndPoint = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`;
    const response = await axios.get(movieSearchEndPoint);
    return {
      movieApiResponse: response.data,
      searchTerm,
      isError: false,
      error: "",
    };
  } catch (error) {
    const errorMsg =
      error?.response?.data?.Error || error.message || "Something went wrong";
    return {
      movieApiResponse: null,
      searchTerm,
      isError: true,
      error: errorMsg,
    };
  }
}
function Home() {
  const data = useLoaderData();
  return (
    <div>
      <SearchForm searchTerm={data.searchTerm} />
      <MovieList data={data} />
    </div>
  );
}

export default Home;
