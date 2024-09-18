import { createContext } from "react";
import { CartProduct } from "../interfaces/ICartProduct.ts";
import { Product } from "../interfaces/IProduct.ts";

interface CartContextData {
    cartProducts: CartProduct[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    increaseQuantity: (product: number) => void;
    decreaseQuantity: (product: number) => void;
    getCartTotal: () => string;
    getItemsQuantity: () => number;
    clearCart: () => void;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);
