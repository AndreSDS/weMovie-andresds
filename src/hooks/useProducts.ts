import { useContext } from "react";
import { ProductContext } from "../context/ProductContext.ts";

export const useProducts = () => {
  const { products } = useContext(ProductContext);

  return {
    products,
  };
};
