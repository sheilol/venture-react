import SimplePhotoGallery from "../../components/SimplePhotoGallery";
import React, { useRef } from "react";
import Return from "../../components/Return";
const myPhotos = [
  {
    src: "/cold/cd1.jpg",
    width: 425,
    height: 640

  },
  {
    src: "/cold/cd2.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd3.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd4.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd5.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd6.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd7.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd8.jpg",
    width: 640,
    height: 425
    
  }, 
  {
    src: "/cold/cd9.jpg",
    width: 425,
    height: 640
    
  }, 
  {
    src: "/cold/cd10.jpg",
    width: 425,
    height: 640
    
  }, 
  {
    src: "/cold/cd11.jpg",
    width: 640,
    height: 425
    
  }, 
  {
    src: "/cold/cd12.jpg",
    width: 640,
    height: 425
    
  }, 
  {
    src: "/cold/cd13.jpg",
    width: 640,
    height: 425
    
  }, 
  {
    src: "/cold/cd14.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd15.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd16.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd17.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd18.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd19.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd20.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd21.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd22.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd23.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd24.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd25.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd26.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd27.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd28.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd29.jpg",
    width: 640,
    height: 425
    
  },
  {
    src: "/cold/cd30.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd31.jpg",
    width: 425,
    height: 640
    
  },
  {
    src: "/cold/cd32.jpg",
    width: 640,
    height: 425
    
  },
];
export default function Cold() {
    const headingRef = useRef(null);

  return <>
  <div className='home_div'>
  <h2 ref={headingRef}>Cold Drink Manufacturing Plant</h2>  
            <Return anchorRef={headingRef} />

   <ul>
    <li>We setup complete Cold Drink / Beverage manufacturing Plant, both Automatic and Semi - Automatic depending on the needs of the customer. The minimum capacity being 2000 litres per hour. The upper limit is setup as per the needs of the customer.</li>
   <li>The purification process is carried out by RO ( Reverse Osmosis ), Carbon filter, UV ( Ultraviolet rays ) etc.</li>
    <li> Complete filtering, filling, capping, packing solutions are custom made according to the requirements of the customer</li>
   </ul>
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
  <SimplePhotoGallery photos={myPhotos} />
 </div>
  </div>
  </>;
}