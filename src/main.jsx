import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { Provider } from "./context/countries";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/rest-countries-app">
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
