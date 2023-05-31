import "./assets/styles/navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./page/Index";
import Portfolio from "./page/Portfolio.js";
import { useState } from "react";
import NoMatch from "./page/NoMatch";

function App() {
  const [isActive, setActive] = useState(false);
  return (
    <BrowserRouter>
      <div className="bg-wrapper">
        <div className="container">
          <Navbar isActive={isActive} setActive={setActive} />
          <Routes>
            <Route path="/myPortfolio/" element={<Index />} />
            <Route path="/myPortfolio/portfolio" element={<Portfolio />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
