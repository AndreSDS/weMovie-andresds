import { Link, useNavigate } from "react-router-dom";
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
  ButtonContainer
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
            <CartListData style={{}}>
              <ButtonContainer>
                <Button
                  title="Finalizar Pedido"
                  onClick={checkout}
                />
              </ButtonContainer>

              <Link to="/">continuar comprando</Link>
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
