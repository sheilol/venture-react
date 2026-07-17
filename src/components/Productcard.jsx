import React from "react";
import { Link } from "react-router-dom";
import "../css/animations.css"; // ensure animations are loaded

function Productcard({ title, image, page, delay = 0 }) {
  return (
    <Link to={page} style={{ textDecoration: "none" }}>
      <div
        className="card-animate"
        style={{
          width: "100%",
          maxWidth: "300px",
          minHeight: "100%",
          margin: "0 auto",
          borderRadius: "18px",
          overflow: "hidden",
          boxShadow: "0 10px 24px rgba(0,0,0,0.12)",
          background: "var(--card-bg)",
          textAlign: "center",
          animationDelay: `${delay}ms`,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{
            position: "relative",
            background: "#111827",
            aspectRatio: "4 / 3",
            overflow: "hidden"
          }}
        >
          <img
            src={image}
            alt={title}
            className="product-img"
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block"
            }}
          />
        </div>
        <div style={{ padding: "18px 16px 20px" }}>
          <h3 style={{
            margin: 0,
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "var(--card-text)",
            lineHeight: 1.4
          }}>
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default Productcard;