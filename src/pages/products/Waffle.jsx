import React, { useRef } from "react";
import Return from "../../components/Return";
import SimplePhotoGallery from "../../components/SimplePhotoGallery";
const myPhotos = [
  {
    src: "/waffle/waffle1.JPG",
    width: 2304,
    height: 1728

  },
  {
    src: "/waffle/waffle2.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/waffle/waffle3.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/waffle/waffle4.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/waffle/waffle5.JPG",
    width: 2304,
    height: 1728
    
  },
  {
    src: "/waffle/waffle6.jpg",
    width: 214,
    height: 254
    
  }
];
export default function Waffle() {
   const headingRef = useRef(null);
  return <>
  <div className='home_div'>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
  <h2 ref={headingRef}>Waffle Cone Maker</h2>
  <Return anchorRef={headingRef} />
  </div>  
    <p>A waffle cone maker is a specialized machine used for producing thin, crisp waffle sheets that are later rolled into ice-cream cones. The machine consists of two heated plates that press and cook the batter evenly. The design and dimensions of these heating plates play a crucial role in determining the production efficiency and quality of the waffle cones.
 
One of the important factors is the width of the heating plate. A wider heating plate allows a larger waffle sheet to be produced in a single cycle. This increases the number of cones that can be formed from each batch, thereby improving overall production capacity. Wider plates also allow operators to roll the waffle into cones more easily and consistently, reducing wastage and increasing output per hour. For commercial production, manufacturers often prefer wider plates to maximize efficiency.

Another key factor is the thickness of the heating plate. The thickness determines how well the plate retains and distributes heat. Thicker plates store more heat and provide uniform cooking across the waffle sheet, resulting in better texture and consistent color. However, thicker plates require more metal in manufacturing and better heating elements, which increases the overall cost of the waffle cone maker. Therefore, machines with thicker heating plates are generally more durable, offer better heat stability, and are priced higher than those with thinner plates.

In summary, wider heating plates improve production efficiency, while thicker heating plates improve heat stability and durability, which directly affects the price and performance of the waffle cone maker.</p>

 <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
     <SimplePhotoGallery photos={myPhotos} forceFullscreen />
    </div>
  </div>
  </>;
}