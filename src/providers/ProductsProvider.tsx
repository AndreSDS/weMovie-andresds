import { ReactNode, useEffect, useState } from "react";
import nexo from "../libs/nexoClient";
import { Product } from "../interfaces/IProduct.ts";
import { ProductContext } from "../context/ProductContext.ts";
import { getAll } from "../api/api";
import { getSessionToken } from "@tiendanube/nexo/helpers/helpers";

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const token = getSessionToken(nexo);
  const bearerToken = `Bearer ${token}`;

  async function fetchProducts() {
    const productsData = await getAll('products', bearerToken);
    setProducts(productsData);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
        {children}
    </ProductContext.Provider>
  );
};
