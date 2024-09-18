import { createContext } from "react";
import { Product } from "../interfaces/IProduct.ts";

interface ProductContextData {
  products: Product[];
}

export const ProductContext = createContext<ProductContextData>({} as ProductContextData);
