import * as React from "react";
import "../css/animations.css";
import "../css/Pages.css";

const images = import.meta.glob('../images/cold/*.{jpg,png,jpeg,gif,webp}', { eager: true, as: 'url' });
const slides = Object.values(images).map((src) => ({ src, width: 1200, height: 800 }));

export default function LightboxGallery() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const isOpen = activeIndex !== null;

  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % slides.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? slides.length - 1 : (current - 1 + slides.length) % slides.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const currentSlide = isOpen ? slides[activeIndex] : null;

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
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>

      {isOpen && currentSlide ? (
        <div
          onClick={() => setActiveIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1300,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <div onClick={(event) => event.stopPropagation()} style={{ position: "relative" }}>
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="gallery-control gallery-control-close"
              aria-label="Close image"
            >
              ×
            </button>
            <img
              src={currentSlide.src}
              alt={`Gallery ${activeIndex + 1}`}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
                borderRadius: 12,
              }}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
