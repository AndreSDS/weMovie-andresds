import { CartProduct} from "../../../interfaces/ICartProduct.ts";
import {
  CartItemContainer,
  CartItemImage,
  CartItemInfo,
  CartItemQuantity,
  ItemQuantity,
  ItemQuantityButton,
  Icon,
  CartItemAction,
  CartItemSubtotal,
  QuanityAndSubtotal,
  InfoContent
} from "./styles.cart-item";
import increaseIcon from "../../../assets/increase-icon.svg";
import decreaseIcon from "../../../assets/decrease-icon.svg";
import removeIcon from "../../../assets/remove-icon.svg";

import { useCart } from "../../../hooks/useCart";
import { currencyFormat } from "../../../helpers/currencyFormat";

type CartItemProps = {
  item: CartProduct;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const subtotal = currencyFormat(product.price * quantity);

  return (
    <CartItemContainer>
      <CartItemImage src={product.image} />
      <InfoContent>
        <CartItemInfo>
          <h3>{product.title}</h3>
          <p>{currencyFormat(product.price)}</p>
        </CartItemInfo>

        <QuanityAndSubtotal>
          <CartItemQuantity>
            <ItemQuantityButton onClick={() => decreaseQuantity(product.id)}>
              <Icon src={decreaseIcon} />
            </ItemQuantityButton>
            <ItemQuantity>{quantity}</ItemQuantity>
            <ItemQuantityButton onClick={() => addToCart(product)}>
              <Icon src={increaseIcon} />
            </ItemQuantityButton>
          </CartItemQuantity>

          <CartItemSubtotal>
            <p>SUBTOTAL</p>
            <span>{subtotal}</span>
          </CartItemSubtotal>
        </QuanityAndSubtotal>
      </InfoContent>

      <CartItemAction onClick={() => removeFromCart(product.id)}>
        <Icon src={removeIcon} />
      </CartItemAction>
    </CartItemContainer>
  );
};
