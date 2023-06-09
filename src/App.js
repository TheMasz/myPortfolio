import "./assets/styles/navbar.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Portfolio from "./page/Portfolio";
import { useState } from "react";
import HomePage from "./page/HomePage";
// import NoMatch from "./page/NoMatch";

function App() {
  const [isActive, setActive] = useState(false);
  return (
    <BrowserRouter basename="/myPortfolio">
      <div className="bg-wrapper">
        <div className="container">
          <Navbar isActive={isActive} setActive={setActive} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            {/* <Route path="*" element={<NoMatch />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
