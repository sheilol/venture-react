import Productcard from "../components/Productcard";
import truck from "../truck.jpg";
import trailer from "../trailer.jpg";
import sardine from "../sardine.jpg";
import cement from "../cement.jpg";
import { Outlet, useLocation } from "react-router-dom";

const products = [
  { title: "Trucks", image: truck, page: "/products/trucks" },
  { title: "Trailers", image: trailer, page: "/products/trailers" },
  { title: "Sardines", image: sardine, page: "/products/sardines" },
  { title: "Cement", image: cement, page: "/products/cement" },
  { title: "Cold Drink Manufacturing", image: truck, page: "/products/cold" },
  { title: "Oil Extraction", image: cement, page: "/products/oil" },
  { title: "Rice", image: cement, page: "/products/rice" }
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
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "32px"
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