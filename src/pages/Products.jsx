import Productcard from "../components/Productcard";
import truck from "../truck.jpg";
import trailer from "../trailer.jpg";
import sardine from "../sardine.jpg";
import cement from "../cement.jpg";
import cold from "../cold.jpg";
import oil from "../oil.jpg";
import rice from "../rice.JPG";
import waffle from "../waffle.jpg";
import { Outlet, useLocation } from "react-router-dom";

const products = [
  { title: "Trucks", image: truck, page: "/products/trucks" },
  { title: "Trailers", image: trailer, page: "/products/trailers" },
  { title: "Sardines", image: sardine, page: "/products/sardines" },
  { title: "Cement", image: cement, page: "/products/cement" },
  { title: "Cold Drink Manufacturing", image: cold, page: "/products/cold" },
  { title: "Oil Extraction", image: oil, page: "/products/oil" },
  { title: "Rice", image: rice, page: "/products/rice" },
  { title: "Waffle", image: waffle, page: "/products/waffle" }
];

export default function Products() {
  const location = useLocation();
  const isIndex = location.pathname === "/products";

  return (
    <>
      <div className="home_div">
      <h2 style={{ textAlign: "left", margin: "32px 0" }}>Products</h2>
      </div>
      {isIndex && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            alignItems: "stretch",
            maxWidth: "1100px",
            margin: "0 auto 40px",
            padding: "0 1rem"
          }}
        >
          {products.map((prod, idx) => (
            <Productcard
              key={idx}
              title={prod.title}
              image={prod.image}
              page={prod.page}
            />
          ))}
          
        </div>
      )}
      <Outlet />
    </>
  );
}