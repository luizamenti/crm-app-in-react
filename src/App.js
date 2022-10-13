import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/pages/Home'
import Orders from './components/pages/Orders'

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/home.css'
import './style/header.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
