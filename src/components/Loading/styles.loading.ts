import styled, { keyframes } from 'styled-components';
import loadIcon from '../../assets/load-icon.png';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const IconLoading = styled.img.attrs({
  src: loadIcon
})`
  height: 5.1875rem;
  width: 5.1875rem;
  animation: ${rotate} 2s linear infinite;
`;

export const LoagingContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 7,25rem);
    display: flex;
    justify-content: center;
    align-items: center;
`;