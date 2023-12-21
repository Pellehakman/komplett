import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bar from "./components/common/Info/Bar";
import Navigation from "./components/common/Navigation/Navigation";
import "./assets/index.css";
import HomePage from "./pages/Home/HomePage.tsx";
import ProductPage from "./pages/Products/ProductPage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Bar />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
