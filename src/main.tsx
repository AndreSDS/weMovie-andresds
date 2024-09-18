import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ProductsProvider } from "./providers/ProductsProvider.tsx";
import { CartProvider } from "./providers/CartProvider";
import { RouterComponent } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
          <RouterComponent />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
