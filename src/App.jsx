import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Approach from "./pages/Approach";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Trailers from "./pages/products/Trailers";
import Truck from "./pages/products/Truck";
import Sardines from "./pages/products/Sardines";
import Cement from "./pages/products/Cement";
import Gallery from "./pages/Gallery";
import Cold from "./pages/products/Cold";
import Oil from "./pages/products/Oil";
import Rice from "./pages/products/Rice";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products" element={<Products />} />  
      <Route path="/products/trucks" element={<Truck />} />
      <Route path="/products/sardines" element={<Sardines />} />
      <Route path="/products/cement" element={<Cement />} />
      <Route path="/products/trailers" element={<Trailers />} />
      <Route path="/products/cold" element={<Cold />} />
      <Route path="/products/oil" element={<Oil />} />
      <Route path="/products/rice" element={<Rice />} />
      <Route path="/approach" element={<Approach />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
