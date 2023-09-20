import { useNavigate } from "react-router-dom";
import { Button } from "../../../components";
import {
  CartEmptyContent,
  CartEmptyHeader,
  CartEmptyTitle,
  CartEmptyImage,
  ButtonContainer,
} from "./styles.cart-empty";

export const CartEmpty = () => {
  const navigate = useNavigate();

  return (
    <CartEmptyContent>
      <CartEmptyHeader>
        <CartEmptyTitle>Parece que não há nada por aqui :(</CartEmptyTitle>
      </CartEmptyHeader>

      <div>
        <CartEmptyImage />
      </div>

      <ButtonContainer>
        <Button title="Voltar" onClick={() => navigate("/")} />
      </ButtonContainer>
    </CartEmptyContent>
  );
};
