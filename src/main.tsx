import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { MoviesProvider } from "./providers/MoviesProvider";
import { CartProvider } from "./providers/CartProvider";
import { RouterComponent } from "./router/Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MoviesProvider>
      <CartProvider>
        <RouterComponent />
      </CartProvider>
    </MoviesProvider>
  </React.StrictMode>
);
