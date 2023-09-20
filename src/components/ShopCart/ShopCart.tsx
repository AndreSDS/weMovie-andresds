import { useNavigate } from "react-router-dom";
import { ItemsQuantity } from "..";
import { useCart } from "../../hooks/useCart";
import { CartContainer, CartHeader, CartTitle, CartIcon } from "./styles.cart";

export const ShopCart = () => {
  const navigate = useNavigate();
  const { getItemsQuantity } = useCart();
  const itemsQuantity = getItemsQuantity();
  const labelItems = itemsQuantity === 1 ? "item" : "items";

  return (
    <CartContainer onClick={() => navigate("/cart")}>
      <CartHeader>
        <CartTitle>Meu Carrinho</CartTitle>
        <ItemsQuantity
          quantity={itemsQuantity}
          label={labelItems}
          color="#999"
        />
      </CartHeader>

      <CartIcon />
    </CartContainer>
  );
};
