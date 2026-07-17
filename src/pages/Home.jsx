import { useEffect, useState } from 'react';
import header from '../header.png';
import "../css/Pages.css";
import { Link } from 'react-router-dom';

const heroSlides = [
  { src: header, alt: 'Venture Consultants company overview' },
  { src: '/truck/truck4.JPG', alt: 'Truck4' },
  { src: '/truck/truck2.jpg', alt: 'Truck2' },
  { src: '/trailer/trailer4.jpg', alt: 'Trailer4' },
  { src: '/cars/cars1.JPG', alt: 'Vehicle project showcase' },
  { src: '/cold/cd2.jpg', alt: 'Cold drink plant showcase' },
  { src: '/oil_extract/oil2.jpg', alt: 'oil2' },
  { src: '/oil_extract/oil4.jpg', alt: 'oil4' },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => setActiveIndex(index);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='home_bg'>
        <div className='hero-slider' aria-label="Featured project slideshow">
          {heroSlides.map((slide, index) => (
            <img
              key={`${slide.src}-${index}`}
              src={slide.src}
              alt={slide.alt}
              className={`hero-slide ${index === activeIndex ? 'active' : ''}`}
            />
          ))}

          <div className="hero-hover-zone-left" onMouseEnter={() => setActiveIndex((prev) => prev)} />
          <div className="hero-hover-zone-right" onMouseEnter={() => setActiveIndex((prev) => prev)} />

          <button type="button" className="hero-nav hero-nav-left" onClick={goToPrev} aria-label="Previous slide">
            &#10094;
          </button>

          <button type="button" className="hero-nav hero-nav-right" onClick={goToNext} aria-label="Next slide">
            &#10095;
          </button>

          <div className='hero-dots' aria-label="Slide indicators">
            {heroSlides.map((slide, index) => (
              <button
                key={`${slide.alt}-${index}`}
                type="button"
                className={`hero-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className='home_div'>
          <h1>Venture Consultants</h1>
          <p>Venture Consultants was founded in Sept 2007. We are based in Mumbai. The firm is advising various companies on start-up projects. Currently we are setting up turn key projects viz.</p>
          <br />
          <ul>
            <li>Installation and commissioning of Oil extraction plants.</li>
            <br />
            <li>Installation and commission Cold drinks plant.</li>
          </ul>
          <br />
          <br />
          <p>We are also exporting</p>
          <ul>
            <li><Link to="/products/rice">Rice</Link></li>
            <li><Link to="/products/sardines">Tinned Sardines</Link></li>
            <li><Link to="/products/cement">Cement</Link></li>
            <li><Link to="/products/waffle">Waffle Cone Makers</Link></li>
            <li><Link to="/products/cars">Cars</Link></li>
            <li><Link to="/products/trucks">Trucks</Link></li>
            <li><Link to="/products/trailers">Trailers</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}