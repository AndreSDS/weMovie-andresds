import styled from "styled-components";
import Icon from "../../assets/button-icon.svg";

export const ButtonContainer = styled.button<{ $quantity?: number; }>`
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
    border-radius: 0.25rem;
    background: ${({$quantity}) => $quantity && $quantity > 0 ? "#039B00" : "#009EDD"};
    outline: none;
    border: none;
    cursor: pointer;
    color: #FFF;
`;

export const IconContainer = styled.div`
    width: 1.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ButtonIcon = styled.img.attrs({
    src: Icon
})`
    width: 0.875rem;
    height: 0.875rem;
`;

export const ButtonTitle = styled.p`
    text-align: center;
    font-size: 0.75rem;
    font-weight: 700;
    margin: 0;
    text-transform: uppercase;
`;
