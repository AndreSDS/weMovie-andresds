import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContainer } from "../layout";
import { Header } from "../components";
import { Cart, Checkout, Home } from "../pages";

export const RouterComponent = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
};
