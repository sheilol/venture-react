import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "../css/animations.css";

const images = import.meta.glob('../images/cold/*.{jpg,png,jpeg,gif,webp}', { eager: true, as: 'url' });
const slides = Object.values(images).map((src) => ({ src, width: 1200, height: 800 }));

export default function LightboxGallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div style={{
        position: "fixed",
        top: "50%",
        right: 8,
        transform: "translateY(-50%)",
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "8px",
        borderRadius: "10px 0 0 10px",
        background: "rgba(36,36,36,0.88)"
      }}>
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={`Gallery ${i + 1}`}
            className="thumb-animate fade-up"
            style={{
              height: "clamp(56px, 9vh, 140px)",
              width: "auto",
              borderRadius: 8,
              border: "2px solid rgba(0,0,0,0.25)",
              animationDelay: `${i * 70}ms`
            }}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
