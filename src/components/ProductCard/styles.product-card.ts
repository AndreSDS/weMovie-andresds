import styled from "styled-components";

export const ProductCardContainer = styled.section`
    width: 100%;
    max-width: 19.3125rem;
    height: 19.0625rem;
    padding: 10px 11px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    border-radius: 0.25rem;
    background: #FFF;

    @media (max-width: 375px) {
        max-width: 21.4375rem;
    }
`;

export const ProductCardContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const ProductCardImage = styled.img`
    width: 147px;
    height: 188px;
    background-color: #C4C4C4;
`;

export const ProductCardInfo = styled.div`
`

export const ProductCardTitle = styled.h2`
    color: #333;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    margin: 0;
`;

export const ProductCardPrice = styled.p`
    color: #2F2E41;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    line-height: 22px;
    margin: 0;
`;