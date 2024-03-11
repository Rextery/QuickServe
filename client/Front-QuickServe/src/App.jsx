import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import FormsAdmin from "./components/FormsAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}/>
        <Route path="/admin/CrearProducto" element={<FormsAdmin />} />
      </Routes>
    </Router>
  );
}

export default App;
