import { ReactNode, useState } from "react";
import { Product } from "../interfaces/IProduct.ts";
import { CartProduct } from "../interfaces/ICartProduct.ts";
import { CartContext } from "../context/CartContext";
import { currencyFormat } from "../helpers/currencyFormat";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  function verifyMovieIsInCart(productId: number): CartProduct | undefined {
    return (
        cartProducts.find((carProduct) => carProduct.product.id === productId) ||
      undefined
    );
  }

  function addToCart(product: Product) {
    if (verifyMovieIsInCart(product.id)) {
      increaseQuantity(product.id);
      return;
    }

    const newCartMovie = {
      product,
      quantity: 1,
    } as CartProduct;

    setCartProducts([...cartProducts, newCartMovie]);
  }

  function removeFromCart(productId: number) {
    const newCartProducts = cartProducts.filter(
      (cartProduct) => cartProduct.product.id !== productId
    );
    setCartProducts(newCartProducts);
  }

  function increaseQuantity(productId: number) {
    const newCartProducts = cartProducts.map((carProduct) => {
      if (carProduct.product.id === productId) {
        return {
          ...carProduct,
          quantity: carProduct.quantity + 1,
        };
      }
      return carProduct;
    });
    setCartProducts(newCartProducts);
  }

  function decreaseQuantity(productId: number) {
    const cartProduct = verifyMovieIsInCart(productId);
    if (!cartProduct) return;

    if (cartProduct.quantity === 1) {
      removeFromCart(productId);
      return;
    }

    const newCartProducts = cartProducts.map((cartProduct) => {
      if (cartProduct.product.id === productId) {
        return {
          ...cartProduct,
          quantity: cartProduct.quantity - 1,
        };
      }
      return cartProduct;
    });

    setCartProducts(newCartProducts);
  }

  function getCartTotal() {
    const total = cartProducts.reduce((acc, cartProduct) => {
      return acc + cartProduct.product.price * cartProduct.quantity;
    }, 0);

    return currencyFormat(total);
  }

  function getItemsQuantity() {
    return cartProducts.reduce((acc, cartProduct) => {
      return acc + cartProduct.quantity;
    }, 0);
  }

  function clearCart() {
    setCartProducts([] as CartProduct[]);
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
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
