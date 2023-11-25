import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../src/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coins/:id" element={<CoinDetails />} />
        <Route path="/coins" element={<Coins />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
