import styled from "styled-components";
import CartEmptyImg from "../../../assets/cart-empty.svg";

export const CartEmptyContent = styled.section`
  display: flex;
  width: 100%;
  padding: 4rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 0.25rem;
  background: #FFF;
`;

export const CartEmptyHeader = styled.header`
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

export const CartEmptyTitle = styled.h1`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0;

  @media (max-width: 375px) {
    display: flex;
    width: 100%;
    height: auto;
    flex-direction: row;
    align-items: center;
  }
`;

export const CartEmptyImage = styled.img.attrs({
  src: CartEmptyImg
})`
  height: 16.5rem;
`;

export const ButtonContainer = styled.div`
  width: 7.5rem;
`;