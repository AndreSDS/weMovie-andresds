import { ItemsCount } from "./styles.count";

type ItemsQuantityProps = {
  quantity: number;
  label?: string;
  color?: string;
};

export const ItemsQuantity = ({ quantity, label = "", color = "#fff" }: ItemsQuantityProps) => {

  return (
    <ItemsCount $color={color}>
      {quantity} {label}
    </ItemsCount>
  );
};
