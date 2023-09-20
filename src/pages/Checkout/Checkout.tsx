import { useNavigate } from "react-router-dom";
import { Button } from "../../components";
import {
  CartCheckoutContent,
  CartCheckoutHeader,
  CartCheckoutTitle,
  CartCheckoutImage,
  ButtonContainer,
} from "./styles.checkout";
import { Container } from "../../layout";

export const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <CartCheckoutContent>
        <CartCheckoutHeader>
          <CartCheckoutTitle>Compra realizada com sucesso!</CartCheckoutTitle>
        </CartCheckoutHeader>

        <CartCheckoutImage />

        <ButtonContainer>
          <Button title="Voltar" onClick={() => navigate("/")} />
        </ButtonContainer>
      </CartCheckoutContent>
    </Container>
  );
};
