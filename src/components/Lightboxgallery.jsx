import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = import.meta.glob('../images/cold/*.{jpg,png,jpeg,gif,webp}', { eager: true, as: 'url' });

const slides = Object.values(images).map((src) => ({
  src,
  width: 1200,
  height: 800,
}));

export default function LightboxGallery() {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
     <div style={{ display: "flex" }}>
        {slides.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={`Gallery ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: "120px",
              height: "auto",
              borderRadius: "10px",
              cursor: "pointer",
              objectFit: "cover",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
            }}
          />
        ))}
   

      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
      </div>
    </>
  );
}
