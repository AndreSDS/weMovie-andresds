import { useEffect } from "react";
import { Loading, MoviesList } from "../../components";
import { useMovies } from "../../hooks/useMovies";
import { Container } from "../../layout";

export function Home() {
  const { movies, setMoviesList } = useMovies();

  async function fetchMovies() {
    if (movies.length === 0) {
      const response = await fetch("https://my-json-server.typicode.com/AndreSDS/fake-api/products");
      const data = await response.json();
      setMoviesList(data);
    }
  }

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (movies.length === 0) {
    return <Loading />;
  }

  return (
    <Container>
      <MoviesList />
    </Container>
  );
}
