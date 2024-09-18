import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContainer } from "../layout";
import { Header } from "../components";
import { Cart, Checkout, Home } from "../pages";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/FallbackComponent";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </ErrorBoundary>
      </MainContainer>
    </BrowserRouter>
  );
};
