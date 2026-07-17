import React, { useRef } from "react";
import Return from "../../components/Return";
import SimplePhotoGallery from "../../components/SimplePhotoGallery";
const myPhotos = [
  {
    src: "/rice/rice1.jpg",
    width: 2448,
    height: 3264
  },
  {
    src: "/rice/rice2.jpg",
    width: 986,
    height: 1478
  },
  {
    src: "/rice/rice3.jpg",
    width: 448,
    height: 336
  },
  {
    src: "/rice/rice4.jpg",
    width: 448,
    height: 336
  },
  {
    src: "/rice/rice5.JPG",
    width: 420,
    height: 315
  }
];

export default function Rice() {
   const headingRef = useRef(null);
  return <>
  <div className='home_div'>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
  <h2 ref={headingRef}>Rice</h2>
  <Return anchorRef={headingRef} />
  </div>  
    <ul>
        <li>Long Grain White Rice, Parboiled rice & Basmati rice.</li>
        <li>Packing in 5 kgs, 10 kgs, 25 Kgs & 50 Kgs.</li>
        <li>Containerised and Break Bulk Shipping.</li>
    </ul>
    <p>We supply Rice from all origins viz. Pakistan, Thailand, Vietnam and India. The rice is graded
into 100%, 5%, 10%, 15% & 20-25% broken. These have been graded as per international
standards interms of the size of the grain. Packing of the rice is usually in the brand as per your
requirements in PP bags. We also provide branding solutions for the same</p>

 <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <SimplePhotoGallery photos={myPhotos} forceFullscreen />
     </div>
  
  </div>
  </>;
}