import LightboxGallery from "../../components/Lightboxgallery";
import SimplePhotoGallery from "../../components/SimplePhotoGallery";
import React, { useRef } from "react";
import Return from "../../components/Return.jsx";

const myPhotos = [
  {
    src: "/sardines/sardine1.jpg",
    width: 787,
    height: 361

  },
   {
    src: "/sardines/sardine2.jpg",
    width: 787,
    height: 361

  }


];
export default function Sardines() {
  const headingRef = useRef(null);
  return <>
  <div className='home_div'>
  <h2 ref={headingRef}>Sardines</h2>
            <Return anchorRef={headingRef} />

  <h3>We supply tinned sardines in tomato sauce with the follows specs.</h3>
    <ul>
        <li>Tinned Sardines in Tomato Sauce.</li>
        <li>155 gms</li>
        <li>Packing in 1x24, 1x50 & 1x100</li>
        <li>We are currently supplying Sardines from Thailand and Indonesia. Sardines are currently into three grades.</li>
        <li>This is the best quality of sardines in which the drained weight is 105-110 gms. There are 4 - 8 fishes in this depending the size on the fish as per the client's requirement in the country where it will be consumed.</li>
        <li>The second best quality of sardines are also shipped by us in accordance to the client's requirement. The drained weight is 85-90 gms. There are 6 - 8 fishes in this depending on the fish and as per the client's requirement in the country where it will be consumed.</li>
        <li>The third best quality of sardines are with drained weight of about 70-80 gms. There are 4 - 6 fishes in this depending on the fish and are as per the client's requirement in the country where they will be consumed.</li>
        <li>We supply them in the brand name of the client. The minimum order size is 2 containers of 20 ft or 1 container of 40 ft. Shipment is effected with 3-4 weeks of complete funds received by us.  </li>
    </ul>
  <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
  <SimplePhotoGallery photos={myPhotos} />
  </div>
  </div>
  </>;
}