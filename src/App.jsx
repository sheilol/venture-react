import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

/* lazy load pages to improve initial bundle speed */
const Home = React.lazy(() => import("./pages/Home"));
const Products = React.lazy(() => import("./pages/Products"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Approach = React.lazy(() => import("./pages/Approach"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));

/* product detail pages (lazy as well) */
const Truck = React.lazy(() => import("./pages/products/Truck"));
const Sardines = React.lazy(() => import("./pages/products/Sardines"));
const Cement = React.lazy(() => import("./pages/products/Cement"));
const Trailers = React.lazy(() => import("./pages/products/Trailers"));
const Cold = React.lazy(() => import("./pages/products/Cold"));
const Oil = React.lazy(() => import("./pages/products/Oil"));
const Rice = React.lazy(() => import("./pages/products/Rice"));

export default function App() {
  return (
    <Suspense fallback={
      <div style={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#84c125"
      }}>
        Loading…
      </div>
    }>
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
    </Suspense>
  );
}
