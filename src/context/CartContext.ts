import { createContext } from "react";
import { Movie } from "../models/IMovie";

export interface CartMovie {
    movie: Movie;
    quantity: number;
}

interface CartContextData {
    cartMovies: CartMovie[];
    addToCart: (movie: Movie) => void;
    removeFromCart: (movieId: number) => void;
    increaseQuantity: (movieId: number) => void;
    decreaseQuantity: (movieId: number) => void;
    getCartTotal: () => string;
    getItemsQuantity: () => number;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);
