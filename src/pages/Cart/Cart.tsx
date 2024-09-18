import { useCart } from "../../hooks/useCart";
import { CartList } from "./CartList/CartList";
import { CartEmpty } from "./CartEmpty/CartEmpty";
import { Container } from "../../layout";

export function Cart() {
  const { cartProducts } = useCart();

  return (
    <Container>
      {cartProducts.length > 0 ? <CartList /> : <CartEmpty /> }
    </Container>
  );
}
