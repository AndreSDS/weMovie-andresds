import styled from "styled-components";
import Icon from "../../assets/cart-icon.svg";

export const CartContainer = styled.section`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
`;

export const CartHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const CartTitle = styled.h2`
    font-size: 0.875rem;
    font-weight: 600;
    margin: 0;

    @media (max-width: 375px) {
        display: none;
    }
`;

export const CartItemsCount = styled.span`
    color: #999;
    font-size: 0.75rem;
    font-weight: 600;
`;

export const CartIcon = styled.img.attrs({
    src: Icon,
    alt: "Cart Icon"
})`
    width: 2rem;
    height: 2rem;
`;