import header from '../header.png';
import "../css/Pages.css";
export default function Home() {
  return (
    <>
    <div className='home_bg'>
      <img
        src={header}
        alt="header"
        style={{ width: "100vw", height: "80vh", display: "block" }}
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
        <li>Rice</li>
        <li>Tinned Sardines</li>
        <li>Cement</li>
        <li>Machinery Parts</li>
        <li>Waffle Cone Makers</li>
        <li>Cars</li>
        <li>Trucks</li>
        <li>Trailers</li>
        <li>Buses</li>
        </ul>
      </div>
      </div>
    </>
  );
}