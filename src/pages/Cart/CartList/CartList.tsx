import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import { useCart } from "../../../hooks/useCart";
import { CartItem } from "../CartItem/CartItem";
import {
  CartListContainer,
  CartListContent,
  CartListHeader,
  CartListRow,
  CartListLabel,
  CartListBody,
  CartListData,
  CartListFooter,
  CartTotalLabel,
} from "./styles.cart-list";

export const CartList = () => {
  const navigate = useNavigate();
  const { cartMovies, getCartTotal, clearCart } = useCart();

  function checkout() {
    clearCart();
    navigate("/checkout");
  }

  return (
    <CartListContainer>
      <CartListContent>
        <CartListHeader>
          <CartListRow>
            <CartListLabel $width="72%">PRODUTO</CartListLabel>
            <CartListLabel>QTD</CartListLabel>
            <CartListLabel>SUBTOTAL</CartListLabel>
          </CartListRow>
        </CartListHeader>

        <CartListBody>
          <CartListRow $displayFlex $height $flexDirection="column">
            {cartMovies.map((cartMovie) => (
              <CartListData key={cartMovie.movie.id}>
                <CartItem item={cartMovie} />
              </CartListData>
            ))}
          </CartListRow>
        </CartListBody>

        <CartListFooter>
          <CartListRow $displayFlex $flexDirection="row">
            <CartListData $width="235px">
              <Button
                title="Finalizar Pedido"
                onClick={checkout}
              />
            </CartListData>

            <CartListData $justifyBetween $width="197px" $paddingRight="1.5rem">
              <CartTotalLabel $color="#999" $fontSize="14px">
                Total
              </CartTotalLabel>
              <CartTotalLabel $color="#2F2E41" $fontSize="24px">
                {getCartTotal()}
              </CartTotalLabel>
            </CartListData>
          </CartListRow>
        </CartListFooter>
      </CartListContent>
    </CartListContainer>
  );
};
