import * as React from "react";

const slides = [
  {
    src: "/cars/cd1.jpg",
    alt: "image 1",
    width: 1200,
    height: 800,
  },
  {
    src: "/cars/cd2.jpg",
    alt: "image 2",
    width: 1200,
    height: 800,
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  const isOpen = activeIndex !== null;

  React.useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <div style={{ padding: 24 }}>
      <h2>Gallery</h2>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        {slides.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            onClick={() => setActiveIndex(index)}
            style={{ width: 180, height: 120, objectFit: "cover", borderRadius: 8, cursor: "pointer" }}
          />
        ))}
      </div>

      {isOpen ? (
        <div
          onClick={() => setActiveIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
          }}
        >
          <img
            src={slides[activeIndex].src}
            alt={slides[activeIndex].alt}
            onClick={(event) => event.stopPropagation()}
            style={{ maxWidth: "100%", maxHeight: "85vh", borderRadius: 12 }}
          />
        </div>
      ) : null}
    </div>
  );
}