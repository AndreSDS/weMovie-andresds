import { Button } from "..";
import { currencyFormat } from "../../helpers/currencyFormat";
import { useCart } from "../../hooks/useCart";
import { Product } from "../../interfaces/IProduct.ts";
import {
  ProductCardContainer,
  ProductCardContent,
  ProductCardImage,
  ProductCardInfo,
  ProductCardTitle,
  ProductCardPrice,
} from "./styles.product-card";

type ProductCardProps = {
  product: Product;
}

export const ProductCard = ({product}: ProductCardProps) => {
  const {cartProducts, addToCart} = useCart()
  const { title, price, image } = product;

  const movieQuantity = cartProducts.find((cartProduct) => cartProduct.product.id === product.id)?.quantity || 0;

  return (
    <ProductCardContainer>
      <ProductCardContent>
        <ProductCardImage src={image} />
        
        <ProductCardInfo>
          <ProductCardTitle>{title}</ProductCardTitle>
          <ProductCardPrice>{currencyFormat(price)}</ProductCardPrice>
        </ProductCardInfo>

        <Button icon quantity={movieQuantity} title="Adicionar ao Carrinho" onClick={() => addToCart(product)} />
      </ProductCardContent>
    </ProductCardContainer>
  );
};
