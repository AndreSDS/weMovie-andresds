import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
    const { cartProducts, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal, getItemsQuantity, clearCart } = useContext(CartContext);

    return {
        cartProducts,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        getCartTotal,
        getItemsQuantity,
        clearCart
    }
};