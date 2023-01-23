import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Clients from "./components/pages/Clients";
import Dashboard from "./components/pages/Dashboard";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style/home.css";
import "./style/header.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
