import { CartMovie } from "../../../context/CartContext";
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
import decreseIcon from "../../../assets/decrease-icon.svg";
import removeIcon from "../../../assets/remove-icon.svg";

import { useCart } from "../../../hooks/useCart";
import { currencyFormat } from "../../../helpers/currencyFormat";

type CartItemProps = {
  item: CartMovie;
};

export const CartItem = ({ item }: CartItemProps) => {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();
  const { movie, quantity } = item;

  const subtotal = currencyFormat(movie.price * quantity);

  return (
    <CartItemContainer>
      <CartItemImage src={movie.image} />
      <InfoContent>
        <CartItemInfo>
          <h3>{movie.title}</h3>
          <p>{currencyFormat(movie.price)}</p>
        </CartItemInfo>

        <QuanityAndSubtotal>
          <CartItemQuantity>
            <ItemQuantityButton onClick={() => decreaseQuantity(movie.id)}>
              <Icon src={decreseIcon} />
            </ItemQuantityButton>
            <ItemQuantity>{quantity}</ItemQuantity>
            <ItemQuantityButton onClick={() => addToCart(movie)}>
              <Icon src={increaseIcon} />
            </ItemQuantityButton>
          </CartItemQuantity>

          <CartItemSubtotal>
            <p>SUBTOTAL</p>
            <span>{subtotal}</span>
          </CartItemSubtotal>
        </QuanityAndSubtotal>
      </InfoContent>

      <CartItemAction onClick={() => removeFromCart(movie.id)}>
        <Icon src={removeIcon} />
      </CartItemAction>
    </CartItemContainer>
  );
};
