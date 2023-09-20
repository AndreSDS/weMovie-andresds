import styled from "styled-components";

export const ItemsCount = styled.span<{$color: string}>`
    text-align: center;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({$color}) => $color};
`;
