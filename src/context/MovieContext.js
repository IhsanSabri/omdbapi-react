import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const MovieContext = createContext();

const API_KEY = 'c51466cc'; // OMDb API Key

const MovieApp = ({ children }) => {
  const [movies, setMovies] = useState();
  const [search, setSearch] = useState('');
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [selectedMovie, setSelectedMovie] = useState('');

  const fetchMovies = async (searchValue, pageNumber) => {
      const response = await axios(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}&page=${pageNumber}`
      );
      const data = response.data;
      setMovies(data.Search);
  };
  
  const showDetail = async (id) => {
      const response = await axios(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );
      const data = response.data;
      setSelectedMovie(data);
  };

  useEffect(() => {
    fetchMovies(search, currentPageNumber);
  }, [search, currentPageNumber]);

  return (
    <MovieContext.Provider
      value={{
        setSearch,
        movies,
        showDetail,
        selectedMovie,
        currentPageNumber,
        setCurrentPageNumber,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieApp;
