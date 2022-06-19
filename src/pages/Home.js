import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import { MovieContext } from "../context/MovieContext";
import Card from "../components/Card";
import "../styles/Home.css";
import Pagination from "../components/Pagination";

const Home = () => {
  const { setSearch, movies } = useContext(MovieContext);
  let { currentPageNumber } = useContext(MovieContext);
  const  { setCurrentPageNumber } = useContext(MovieContext);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPageNumber(currentPageNumber + 1);
  };
  const handlePrevPage = (e) => {
    currentPageNumber === 1 ? e.preventDefault() : setCurrentPageNumber(currentPageNumber - 1);
  };

  return (
    <div className="home-container">
      <Input handleSearch={handleSearch} />
      {movies?.length > 0 ? (
        <><div className="movies">
          {movies?.map((movie) => {
            return (
              <Link
                to={`movies/${movie.imdbID}`}
                className="text-link"
                key={movie.imdbID}
              >
                <Card
                  key={movie.imdbID}
                  image={movie.Poster}
                  title={movie.Title}
                  year={movie.Year} />
              </Link>
            );
          })}
        </div><Pagination prevPage={handlePrevPage} nextPage={handleNextPage} /></>
      ) : (
        <div className="search-warning">
          <p>Search a movie!</p>
          <p>i.e. Harry Potter</p>
        </div>
      )}
    </div>
  );
};

export default Home;
