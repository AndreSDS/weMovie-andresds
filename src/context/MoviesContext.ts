import { createContext } from "react";
import { Movie } from "../models/IMovie";

interface MoviesContextData {
  movies: Movie[];
  setMoviesList: (movies: Movie[]) => void;
}

export const MoviesContext = createContext<MoviesContextData>({} as MoviesContextData);
