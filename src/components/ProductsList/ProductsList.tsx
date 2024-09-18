import { ProductsContainer } from "./styles.products-list.ts";
import { Product } from "../../interfaces/IProduct.ts";
import { useProducts } from "../../hooks/useProducts.ts";
import { ProductCard } from "../ProductCard/ProductCard.tsx";

export const ProductsList = () => {
  const { products } = useProducts();

  return (
    <ProductsContainer>
      {products.map((product: Product) => (
        <ProductCard product={product}  key={product.id} />
      ))}
    </ProductsContainer>
  );
};
