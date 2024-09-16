import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./redux/store";

import { Provider } from "react-redux";

import { Route, ReactProvider, createRoutesFromElements } from "react-router";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<App />} />)
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ReactProvider router={router} />
  </Provider>
);
