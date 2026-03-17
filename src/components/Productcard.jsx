import React from "react";
import { Link } from "react-router-dom";
import "../css/animations.css"; // ensure animations are loaded

function Productcard({ title, image, page, delay = 0 }) {
  return (
    <Link to={page} style={{ textDecoration: "none" }}>
      <div
        className="card-animate"
        style={{
          maxWidth: "300px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
          background: "var(--card-bg)",
          textAlign: "center",
          animationDelay: `${delay}ms`
        }}
      >
        <div style={{ position: "relative", background: "#222" }}>
          <img
            src={image}
            alt={title}
            className="product-img"
            loading="lazy"
            style={{
              width: "100%",
              display: "block",
              borderBottom: "4px solid #fff",
              borderRadius: "20px 20px 0 0"
            }}
          />
        </div>
        <h3 style={{
          margin: "20px 0",
          fontWeight: "bold",
          fontSize: "1.3rem",
          color: "var(--card-text)"
        }}>
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default Productcard;