import styled from "styled-components";
import CartCheckoutImg from "../../assets/cart-checkout.svg";

export const CartCheckoutContent = styled.section`
  display: flex;
  width: 100%;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 0.25rem;
  background: #FFF;
`;

export const CartCheckoutHeader = styled.header`
  color: #2F2E41;
  display: flex;
  width: 22rem;
  height: 2.25rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 375px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
  }
`;

export const CartCheckoutTitle = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;
`;

export const CartCheckoutImage = styled.img.attrs({
  src: CartCheckoutImg
})`
  height: 16.5rem;
`;

export const ButtonContainer = styled.div`
  width: 11.25rem;
`;