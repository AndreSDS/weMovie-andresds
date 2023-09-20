import { MovieCard } from "..";
import { MoviesContainer } from "./styles.movies";
import { Movie } from "../../models/IMovie";
import { useMovies } from "../../hooks/useMovies";

export const MoviesList = () => {
  const { movies } = useMovies();

  return (
    <MoviesContainer>
      {movies.map((movie: Movie) => (
        <MovieCard movie={movie}  key={movie.id} />
      ))}
    </MoviesContainer>
  );
};
