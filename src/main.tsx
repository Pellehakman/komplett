import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Bar from "./components/common/Info/Bar";

import "./assets/index.css";
import HomePage from "./pages/Home/HomePage.tsx";
import ProductPage from "./pages/Products/ProductPage.tsx";
import Header from "./components/common/Header/Header.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Bar />
      <div className="container mx-auto">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/komponenter/grafikkort" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
