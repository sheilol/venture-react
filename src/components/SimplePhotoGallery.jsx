import { useEffect, useState } from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "../css/Pages.css";

export default function SimplePhotoGallery({ photos, targetRowHeight = 150, forceFullscreen = false }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % photos.length));
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((current) => (current === null ? photos.length - 1 : (current - 1 + photos.length) % photos.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, photos.length]);

  const currentPhoto = isOpen ? photos[activeIndex] : null;

  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        targetRowHeight={targetRowHeight}
        onClick={({ index }) => setActiveIndex(index)}
      />

      {isOpen && currentPhoto ? (
        <div
          onClick={() => setActiveIndex(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(event) => event.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: forceFullscreen ? "100vw" : "1100px",
              height: forceFullscreen ? "100dvh" : "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: forceFullscreen ? "12px" : "0",
            }}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="gallery-control gallery-control-close"
              aria-label="Close image"
            >
              ×
            </button>

            {photos.length > 1 ? (
              <button
                type="button"
                className="gallery-control gallery-control-prev"
                onClick={() => setActiveIndex((current) => (current === null ? 0 : (current - 1 + photos.length) % photos.length))}
                aria-label="Previous image"
              >
                &#10094;
              </button>
            ) : null}

            <img
              src={currentPhoto.src}
              alt={currentPhoto.alt || `Gallery ${activeIndex + 1}`}
              style={{
                display: "block",
                maxWidth: "100%",
                maxHeight: forceFullscreen ? "90dvh" : "80vh",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
              }}
            />

            {photos.length > 1 ? (
              <button
                type="button"
                className="gallery-control gallery-control-next"
                onClick={() => setActiveIndex((current) => (current === null ? 0 : (current + 1) % photos.length))}
                aria-label="Next image"
              >
                &#10095;
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
