import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 375px) {
    padding: 0 1rem;
  }
`;