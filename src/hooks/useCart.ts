import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    const { cartMovies, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, getItemsQuantity, clearCart } = useContext(CartContext);

    return {
        cartMovies,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        getItemsQuantity,
        clearCart
    }
};