import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Return({
  anchorRef,            // ref to the heading element in the page (required)
  offset = 8,           // px below the heading
  right = 16,           // px from viewport right
  breakpoint = 420,     // below this width the link will be inline (not fixed)
  animationDelay = 180, // ms
}) {
  const [linkPos, setLinkPos] = useState({ top: 120, right, fixed: true });

  useEffect(() => {
    function update() {
      const heading = anchorRef?.current;
      const isSmall = window.innerWidth <= breakpoint;
      if (!heading || isSmall) {
        setLinkPos({ top: 0, right, fixed: false });
        return;
      }
      const rect = heading.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;
      const top = Math.round(scrollY + rect.top + rect.height + offset);
      setLinkPos({ top, right, fixed: true });
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    window.addEventListener("load", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("load", update);
    };
  }, [anchorRef, offset, right, breakpoint]);

  return (
    <>
      <style>{`
        .return-link-inline{
          display: inline-block;
          margin-top: 0.6rem;
          color: grey;
          text-decoration: none;
          transition: transform 160ms ease, color 160ms ease, opacity 160ms;
          cursor: pointer;
        }
        .return-link-inline h3{
          margin: 0;
          text-align: right;
          font-size: 1.25rem;
          font-weight: 600;
          color: grey;
          line-height: 1;
        }
        .return-link-inline:hover{
          transform: translateY(-2px) scale(1.03);
          color: #636363;
        }

        .return-link-fixed{
          position: fixed;
          z-index: 1400;
          text-decoration: none;
          transition: transform 200ms ease, box-shadow 200ms ease, color 160ms ease, opacity 160ms;
          opacity: 0.98;
          background: transparent;
          padding: 6px 8px;
          border-radius: 6px;
          cursor: pointer;
          will-change: transform;
        }
        .return-link-fixed h3{
          margin: 0;
          text-align: right;
          color: grey;
          font-size: 1.25rem;
          font-weight: 600;
        }
        .return-link-fixed:hover{
          transform: translateY(-10px) scale(1.035);
          color: #636363;
          box-shadow: 0 6px 18px rgba(0,0,0,0.12);
        }

        @media (max-width: 420px) {
          .return-link-fixed { position: static !important; display: inline-block; transform: none; box-shadow: none; padding: 0; }
          .return-link-inline h3 { font-size: 1rem; text-align: left; }
        }
      `}</style>

      {/* inline link for narrow layouts */}
      <Link
        to="/products"
        className="return-link-inline fade-up"
        aria-label="Return to Products"
        style={{
          display: linkPos.fixed ? "none" : "inline-block",
          animationDelay: `${animationDelay}ms`,
        }}
      >
        <h3>Return to Products</h3>
      </Link>

      {/* fixed viewport-aligned link */}
      {linkPos.fixed && (
        <Link
          to="/products"
          className="return-link-fixed fade-up"
          aria-label="Return to Products"
          style={{
            top: linkPos.top,
            right: linkPos.right,
            animationDelay: `${animationDelay + 20}ms`,
          }}
        >
          <h3>Return to Products</h3>
        </Link>
      )}
    </>
  );
}