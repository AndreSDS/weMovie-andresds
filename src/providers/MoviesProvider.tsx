import { ReactNode, useState } from "react";
import { Movie } from "../models/IMovie";
import { MoviesContext } from "../context/MoviesContext";

export const MoviesProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([]);
  
    function setMoviesList(movies: Movie[]) {
      setMovies(movies);
    }
  
    return (
      <MoviesContext.Provider value={{ movies, setMoviesList }}>
        {children}
      </MoviesContext.Provider>
    );
  };