import { ItemsQuantity } from "..";
import {
  ButtonContainer,
  IconContainer,
  ButtonIcon,
  ButtonTitle,
} from "./styles.button";

type ButtonProps = {
  title: string;
  onClick: () => void;
  quantity?: number;
  icon?: boolean;
};

export const Button = ({ title, onClick, quantity = 0, icon = false }: ButtonProps) => {
  
  return (
    <ButtonContainer $quantity={quantity} onClick={onClick}>
      {icon && <IconContainer>
        <ButtonIcon />
        <ItemsQuantity quantity={quantity} />
      </IconContainer>}
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonContainer>
  );
};
