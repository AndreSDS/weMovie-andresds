import { useCart } from "../../hooks/useCart";
import { CartList } from "./CartList/CartList";
import { CartEmpty } from "./CartEmpty/CartEmpty";
import { Container } from "../../layout";

export function Cart() {
  const { cartMovies } = useCart();

  return (
    <Container>
      {cartMovies.length > 0 ? <CartList /> : <CartEmpty /> }
    </Container>
  );
}
