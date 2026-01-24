import React, { useRef, useState, useEffect } from "react";
import Return from "../../components/Return";

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

 
  </div>
  </>;
}