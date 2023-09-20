import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    gap: 1.5rem;
    flex-direction: column;
    align-items: center;
    max-width: 60rem;
    height: auto;
    margin: 0 auto 1.5rem auto;

    @media (max-width: 375px) {
        gap: 0;
    }
`;