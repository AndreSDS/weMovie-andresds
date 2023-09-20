import styled from "styled-components";

export const CartListContainer = styled.section`
  display: flex;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.25rem;
  background: #FFF;

  @media (max-width: 375px) {
    padding: 1rem;
    min-height: calc(100vh - 4.25rem);
  }
`;

export const CartListContent = styled.table`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.3125rem;

  @media (max-width: 375px) {
    flex: 1;
  }
`;

export const CartListHeader = styled.thead`
  display: flex;
  align-items: center;
  width: 43.125rem;
  height: 1.25rem;

  @media (max-width: 375px) {
    display: none;
  }
`;

export const CartListRow = styled.tr<{ $displayFlex?: boolean, $flexDirection?: string, $height?: boolean }>`
  width: 100%;
  display: ${({ $displayFlex }) => $displayFlex ? "flex" : "block"};
  justify-content: ${({ $displayFlex }) => $displayFlex ? "space-between" : "center"};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  gap: ${({ $flexDirection }) => $flexDirection ? "0.75rem" : "1rem"};

  @media (max-width: 375px) {
    flex-direction: column-reverse;
  }
`;

export const CartListLabel = styled.th<{ $width?: string }>`
  width: ${({ $width }) => $width || "100%"};
  text-align: left;
  color: #999;
  font-size: 0.875rem;
  font-weight: 700;
`;

export const CartListBody = styled.tbody`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
  padding-bottom: 1.3125rem;
  border-bottom: 1px solid #999;
`;

export const CartListData = styled.td<{ $width?: string, $paddingRight?: string, $justifyBetween?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ $justifyBetween }) => $justifyBetween ? "space-between" : "flex-start"};
  width: ${({ $width }) => $width || "100%"};
  padding-right: ${({ $paddingRight }) => $paddingRight || "0"};

  @media (max-width: 375px) {
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 2rem;
  }
`;

export const CartListFooter = styled.tfoot`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CartTotalLabel = styled.span<{ $color: string, $fontSize: string, $lineHeight?: string }>`
  font-weight: 700;
  text-align: center;
  font-style: normal;
  line-height: ${({ $lineHeight }) => $lineHeight || "normal"};
  text-transform: uppercase;
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize};

  @media (max-width: 375px) {
    line-height: 1.25rem;
  }
`;