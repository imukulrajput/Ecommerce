import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/Cart-Context.jsx";
import { WishListProvider } from "./context/WishList-Context.jsx";
import { LoginProvider } from "./context/Login-Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <WishListProvider>
          <LoginProvider>
            <App />
          </LoginProvider> 
        </WishListProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
