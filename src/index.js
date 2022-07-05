import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import Client from "shopify-buy";

import "./index.css";
import App from "./App";

import { store, persistor } from "./redux/store";
import { UserProvider } from "./contexts/user.context";
import { ProductsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

// const client = Client.buildClient({
//   storefrontAccessToken: "c711b549ea37a11dee5560bfd95ddbda",
//   domain: "plant-oasis-store.myshopify.com",
// });

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <PersistGate persistor={persistor}>
            <CartProvider>
              <App />
            </CartProvider>
          </PersistGate>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
