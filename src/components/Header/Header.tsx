import { Link } from "react-router-dom";
import { ShopCart } from "../";
import { HeaderContainer, HeaderTitle } from "./styles.header";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <Link to="/">Andre's Store</Link>
      </HeaderTitle>

      <ShopCart />
    </HeaderContainer>
  );
};
