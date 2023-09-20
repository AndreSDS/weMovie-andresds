import { Button } from "..";
import { currencyFormat } from "../../helpers/currencyFormat";
import { useCart } from "../../hooks/useCart";
import { Movie } from "../../models/IMovie";
import {
  MovieCardContainer,
  MovieCardContent,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MoviePrice,
} from "./styles.movie-card";

type MovieCardProps = {
  movie: Movie;
}

export const MovieCard = ({movie}: MovieCardProps) => {
  const {cartMovies, addToCart} = useCart()
  const { title, price, image } = movie;

  const movieQuantity = cartMovies.find((cartMovie) => cartMovie.movie.id === movie.id)?.quantity || 0;

  return (
    <MovieCardContainer>
      <MovieCardContent>
        <MovieImage src={image} />
        
        <MovieInfo>
          <MovieTitle>{title}</MovieTitle>
          <MoviePrice>{currencyFormat(price)}</MoviePrice>
        </MovieInfo>

        <Button icon quantity={movieQuantity} title="Adicionar ao Carrinho" onClick={() => addToCart(movie)} />
      </MovieCardContent>
    </MovieCardContainer>
  );
};
