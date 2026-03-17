import header from '../header.png';
import "../css/Pages.css";
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <div className='home_bg'>
      <img
        src={header}
        alt="header"
        style={{ width: "100%", maxWidth: "100vw", height: "auto", display: "block" }}
      />
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
        <li><Link to="/products/machinery">Machinery Parts</Link></li>
        <li><Link to="/products/waffle">Waffle Cone Makers</Link></li>
        <li><Link to="/products/cars">Cars</Link></li>
        <li><Link to="/products/trucks">Trucks</Link></li>
        <li><Link to="/products/trailers">Trailers</Link></li>
        <li><Link to="/products/buses">Buses</Link></li>
        </ul>
      </div>
      </div>
    </>
  );
}