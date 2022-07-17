import React from "react";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/index";
import { Provider } from "react-redux";
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>
  
);

reportWebVitals();
