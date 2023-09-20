import { ReactNode, useState } from "react";
import { Movie } from "../models/IMovie";
import { CartContext, CartMovie } from "../context/CartContext";
import { currencyFormat } from "../helpers/currencyFormat";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartMovies, setCartMovies] = useState<CartMovie[]>([]);

  function verifyMovieIsInCart(movieId: number): CartMovie | undefined {
    return (
      cartMovies.find((cartMovie) => cartMovie.movie.id === movieId) ||
      undefined
    );
  }

  function addToCart(movie: Movie) {
    if (verifyMovieIsInCart(movie.id)) {
      increaseQuantity(movie.id);
      return;
    }

    const newCartMovie = {
      movie,
      quantity: 1,
    } as CartMovie;

    setCartMovies([...cartMovies, newCartMovie]);
  }

  function removeFromCart(movieId: number) {
    const newCartMovies = cartMovies.filter(
      (cartMovie) => cartMovie.movie.id !== movieId
    );
    setCartMovies(newCartMovies);
  }

  function increaseQuantity(movieId: number) {
    const newCartMovies = cartMovies.map((cartMovie) => {
      if (cartMovie.movie.id === movieId) {
        return {
          ...cartMovie,
          quantity: cartMovie.quantity + 1,
        };
      }
      return cartMovie;
    });
    setCartMovies(newCartMovies);
  }

  function decreaseQuantity(movieId: number) {
    const cartMovie = verifyMovieIsInCart(movieId);
    if (!cartMovie) return;

    if (cartMovie.quantity === 1) {
      removeFromCart(movieId);
      return;
    }

    const newCartMovies = cartMovies.map((cartMovie) => {
      if (cartMovie.movie.id === movieId) {
        return {
          ...cartMovie,
          quantity: cartMovie.quantity - 1,
        };
      }
      return cartMovie;
    });

    setCartMovies(newCartMovies);
  }

  function getCartTotal() {
    const total = cartMovies.reduce((acc, cartMovie) => {
      return acc + cartMovie.movie.price * cartMovie.quantity;
    }, 0);

    return currencyFormat(total);
  }

  function getItemsQuantity() {
    const quantity = cartMovies.reduce((acc, cartMovie) => {
      return acc + cartMovie.quantity;
    }, 0);

    return quantity;
  }

  function clearCart() {
    setCartMovies([] as CartMovie[]);
  }

  return (
    <CartContext.Provider
      value={{
        cartMovies,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        getItemsQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
