import { Link } from "react-router-dom";

function Productcard({ title, image, page }) {
  return (
    <Link to={page} style={{ textDecoration: "none" }}>
      <div style={{
        maxWidth: "300px",
        margin: "0 auto", // Remove large top margin
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
        background: "#f8f8f8",
        textAlign: "center"
      }}>
        <div style={{
          position: "relative",
          background: "#222"
        }}>
          <img
            src={image}
            alt={title}
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
          color: "#222"
        }}>
          {title}
        </h3>
      </div>
    </Link>
  );
}

export default Productcard;