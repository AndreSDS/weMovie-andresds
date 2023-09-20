import { useContext } from "react";
import { MoviesContext } from "../context/MoviesContext";

export const useMovies = () => {
    const { movies, setMoviesList } = useContext(MoviesContext);

    return {
        movies,
        setMoviesList
    }
};