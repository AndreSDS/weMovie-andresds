import styled from "styled-components";

export const CartItemContainer = styled.section`
  position: relative;
  width: 100%;
  height: 7.125rem;
  display: flex;
  align-items: center;
  gap: 3.25rem;
  background: #FFF;

  @media (max-width: 375px) {
    gap: 1rem;
    height: 5.125rem;
  }
`;

export const CartItemImage = styled.img`
  width: 5.625rem;
  height: 7.125rem;
  object-fit: cover;

  @media (max-width: 375px) {
    width: 4rem;
    height: 5.125rem;
  }
`;

export const InfoContent = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 3.25rem;

  @media (max-width: 375px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    height: 5rem;
    width: 100%;
  }
`;

export const CartItemInfo = styled.div`
  width: 15.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  color: #2F2E41;
  font-weight: 700;

  h3 {
    font-size: 0.875rem;    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }

  @media (max-width: 375px) {
    width: 100%;
    flex-direction: row;
    align-self: flex-start;
    justify-content: space-between;
    padding-right: 2rem;
  }
`;

export const QuanityAndSubtotal = styled.div`
    display: flex;
    align-items: center;
    gap: 3rem;
    width: 25rem;

  @media (max-width: 375px) {
    width: 100%;
    height: 2.375;
    gap: 0;
    justify-content: space-between;
  }
`;

export const CartItemQuantity = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;

  @media (max-width: 375px) {
    width: 7.25rem;
    justify-content: space-between;
  }
`;

export const ItemQuantity = styled.span`
  display: flex;
  width: 3.875rem;
  height: 1.625rem;
  padding: 0 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 0.25rem;
  border: 1px solid #D9D9D9;
  background: #FFF;
  color: #2F2E41;
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;


`;

export const Icon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const ItemQuantityButton = styled.span`
  width: 1.125rem;
  height: 1.125rem;
  cursor: pointer;
`

export const CartItemSubtotal = styled.div`
  display: flex;
  width: 13.25rem;
  height: 1.25rem;
  flex-direction: column;
  justify-content: center;
  color: #2F2E41;

  p {
    display: none;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
  }

  @media (max-width: 375px) {
    width: 6.125rem;
    height: 2.25rem;
    align-items: end;

    p {
      display: inline;
      color: #999;
      font-size: 0.75rem;
      font-weight: 700;
      margin: 0;
    }
  }
`;

export const CartItemAction = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 375px) {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
