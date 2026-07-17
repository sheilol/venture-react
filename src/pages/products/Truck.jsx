import React from "react";
import Return from "../../components/Return.jsx";
import SimplePhotoGallery from "../../components/SimplePhotoGallery.jsx";
const myPhotos = [
  {
    src: "/truck/truck1.jpg",
        width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck2.jpg",
        width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck3.jpg",
        width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck4.JPG",
    width: 2304,
    height: 1536

  },
  {
    src: "/truck/truck5.JPG",
    width: 3968,
    height: 2976

  },
  {
    src: "/truck/truck6.jpg",
    width: 3264,
    height: 1836
  },
  {
    src: "/truck/truck7.jpg",
    width: 3264,
    height: 1836
  },
  {
    src: "/truck/truck8.jpg",
    width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck9.jpg",
    width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck10.jpg",
    width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck11.jpg",
    width: 3264,
    height: 1836

  },
  {
    src: "/truck/truck12.jpg",
    width: 3264,  
    height: 1836

  }
];
export default function Truck() {
  const headingRef = React.useRef(null);
  return <>
  <div className='home_div'>
  <h2 ref={headingRef}>Trucks</h2>  
            <Return anchorRef={headingRef} />
    <p>We supply US manufactured trucks. These are both used and new. The used trucks are in excellent running conditions and are only shipped after they pass through the stringent checks which are carried out by our workshop. </p>
    <br />
    <p>We also change left hand drive trucks to right hand drive trucks, for countries which need right hand drive trucks. We have started doing conversion of left hand driven American trucks to right hand drive and exporting the same to our clients who require US manufactured truck. During this process the truck undergoes rigorous checkups and we service the truck before shipping the same.</p>
    <br />

    <p>Usually the conversion is carried out on both International trucks and Freightliner trucks. For freightliner trucks, its mostly done on Centurys and Columbias. We choose the trucks with minimum mileage and decent year of manufacture. The complete dashboard alongwith the necessary changes under the hood of the truck are carried out. After the conversion is done, the trucks undergo rigorous tests before they are shipped to clients.</p>
    <br />

    <p>Do contact us for these trucks, so that we can send the complete set of trucks which have undergone the conversion process.</p>
    <br />

    <p>Also contact us for left hand driven trucks.</p>
    <br />

    <p>We supply trucks with Cummins N14, ISX, Detriot 12.7 Lt to Detriot 14 Lt engines.</p>
    <br />
<div style={{ maxWidth: '1200px', margin: '0 auto' }}>
         <SimplePhotoGallery photos={myPhotos} forceFullscreen />
        </div>
 
  </div>
  </>;
}