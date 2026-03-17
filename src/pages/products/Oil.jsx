import SimplePhotoGallery from "../../components/SimplePhotoGallery";
import React, { useRef } from "react";
import Return from "../../components/Return.jsx";
const myPhotos = [
  {
    src: "/oil_extract/oil1.jpg",
    width: 480,
    height: 640

  },
  {
    src: "/oil_extract/oil2.jpg",
    width: 480,
    height: 640
    
  },
  {
    src: "/oil_extract/oil3.jpg",
    width: 640,
    height: 480
    
  },
  {
    src: "oil_extract/oil4.jpg",
    width: 640,
    height: 480
    
  },
  {
    src: "/oil_extract/oil5.jpg",
    width: 640,
    height: 480
    
  },
  {
    src: "/oil_extract/oil6.jpg",
    width: 640,
    height: 480
    
  },
  {
    src: "/oil_extract/oil7.jpg",
    width: 640,
    height: 480
    
  }
];
export default function Oil() {
    const headingRef = useRef(null);
  return <>
  <div className='home_div'>
  <h2 ref={headingRef}>Oil Extraction Plant</h2>  
            <Return anchorRef={headingRef} />
   <p>We undertake turnkey projects in setting up complete Oil Extraction Plant for 32 variants of seeds. This involves processing the seed which either includes cutting it down to smaller pieces or cooking the same and breaking it open. After this, it is processed in the expellers where the oil is extracted from the seed.
</p>
<br />
<p>
There is second crushing involved too in which the seed is processed is once more and more oil is extracted. After this, the oil is passed through the oil filter to refine the oil and remove all the impurities.

</p>
<h2>Oil Purification Plant</h2>
<p>Various types of filtration solutions are provided to filter the oil. We have the following.</p>
   <ul>
    <li>Filter Press</li>
    <li>Vibro Screen</li>
    <li>Pressure Leaf Filter</li>
   </ul>
   <p>All these 3 filters are capable of filtering the oil to very high level, bringing in complete transparency in the oil.</p>
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
  <SimplePhotoGallery photos={myPhotos} />
 </div>
  </div>
  </>;
}