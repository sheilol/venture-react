import React, { useRef } from "react";
import Return from "../../components/Return.jsx";
import SimplePhotoGallery from "../../components/SimplePhotoGallery.jsx";
const myPhotos = [
  {
    src: "/cars/cars1.JPG",
    width: 2304,
    height: 1728

  },
  {
    src: "/cars/cars2.JPG",
    width: 2304,
    height: 1728

  },
  {
    src: "/cars/cars3.JPG",
    width: 2304,
    height: 1728  
  },
  {
    src: "/cars/cars4.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/cars/cars5.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/cars/cars6.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/cars/cars7.JPG",
    width: 2304,
    height: 1728
    
  }
];
export default function Cars() {
  const headingRef = useRef(null);  
  return<> 
  <div className='home_div'>
  <h2 ref={headingRef}>Global Supply of Brand New American Cars</h2>
            <Return anchorRef={headingRef} />
    <p>At Venture Consultants, we specialize in the sourcing and global supply of brand new American cars for customers, dealers, and fleet buyers across the world. Through our established network of authorized dealers and automobile suppliers in the United States, we are able to procure the latest models of American vehicles and arrange delivery to international destinations.

Our team manages the entire process from vehicle sourcing to export logistics, ensuring that buyers receive genuine, brand new vehicles with complete documentation. With our experience in international trade and shipping, we ensure a smooth and reliable transaction for clients located anywhere in the world.

We cater to individual buyers, automobile traders, corporate clients, and fleet operators who require high-quality American vehicles at competitive prices.</p>
<h2>Types of American Vehicles We Supply</h2>

<p>We are able to source and export a wide range of brand new American vehicles, including:</p>
<ul>
    <li>Sedans and luxury cars</li>
    <li>SUVs and crossover vehicles</li>
    <li>Pickup trucks and utility vehicles</li>
    <li>Commercial vehicles</li>
    <li>High-performance and premium American cars</li>
</ul>
<p>Vehicles are sourced directly from trusted suppliers in the United States, ensuring authenticity, quality, and competitive pricing.</p>

<h2>Global Export and Shipping</h2>

<p>Venture Consultants provides complete support for the international export of vehicles. Our services include:
</p>

<ul>
    <li>Procurement of brand new vehicles from the United States</li>
    <li>Export documentation and compliance</li>
    <li>Container or Roll-on/Roll-off (RoRo) shipping arrangements</li>
    <li>Coordination with international freight and shipping companies</li>
    <li>Delivery to major international ports worldwide</li>
</ul>
<p>We ensure that vehicles are shipped safely and efficiently to the destination country in accordance with international trade and shipping standards.

</p>
<h2>Why Choose Venture Consultants</h2>
<p>Clients choose Venture Consultants for automobile sourcing because of our reliable network and professional handling of international transactions.
</p>
<p>Key advantages include:</p>
<ul>
    <li>Access to brand new American vehicles</li>
    <li>Competitive global pricing</li>
    <li>Professional export handling</li>
    <li>Reliable shipping to worldwide destinations</li>
    <li>Transparent and efficient transaction process</li>
</ul>
<p>Our goal is to make the process of buying and importing brand new American cars simple and convenient for buyers worldwide.</p>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <SimplePhotoGallery photos={myPhotos} forceFullscreen />
   </div>
  </div>
</>
}