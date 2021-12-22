import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

const App = () => {
  return <React.Fragment>
    <h1 className="text-center text-danger my-3">Flats</h1>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/exterior-one-story-bungalow-at-pasadena-california-royalty-free-image-1577134660.jpg" height="200px" />
            <div className="card-body">
              <h5 className="card-title">&#8377; 85Lac</h5>
              <p className="card-text">
              <b>3 BHK Villa</b> for sale in Kharar-Landran Road<br/>
              <em>East facing Property</em></p>
              <br/>
                <a href="#" className="btn btn-primary">Contact</a>&nbsp;
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://3.imimg.com/data3/UG/PE/MY-9291216/bungalows-250x250.png" height="200px" />
            <div className="card-body">
              <h5 className="card-title">&#8377; 1.34 Cr</h5>
              <p className="card-text">
              <b>5 BHK Villa</b> for sale in Sector-22<br/>
              </p>
              <br/><br/><br/>
                <a href="#" className="btn btn-primary">Contact</a>&nbsp;
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://images.jdmagicbox.com/comp/lonavala/b6/9999p2114.2114.160516160054.d3b6/catalogue/priyas-bungalow-lonavala-bungalows-on-hire-ewvhaqnn2t.jpg?clr=#403326 " height="200px" />
            <div className="card-body">
              <h5 className="card-title">&#8377; 1.45 Cr</h5>
              <p className="card-text">
              <b>4 BHK Villa</b> for sale in VIP Road<br/>
              <em>Newly Constructed Property;Near by International brand in pizza dominos outlet</em></p>
                <a href="#" className="btn btn-primary">Contact</a>&nbsp;
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://img.staticmb.com/mbimages/project/Photo_h300_w450/Project-Photo-1-7-Bungalow-Mumbai-5001316_480_1366_300_450.jpg" height="200px" />
            <div className="card-body">
              <h5 className="card-title">&#8377; 1.20 Cr</h5>
              <p className="card-text">
              <b>5 BHK Villa</b> for sale in Sector-21<br/>
              <em>Near Jw marriot Chandigarh</em></p><br/>
                <a href="#" className="btn btn-primary">Contact</a>&nbsp;
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://5.imimg.com/data5/UP/FO/MY-6316076/turnkey-bungalow-construction-500x500.jpg" height="200px" />
            <div className="card-body">
              <h5 className="card-title">&#8377; 1 Cr</h5>
              <p className="card-text">
              <b>5 BHK Villa</b> for sale in Sunny Enclave,Mohali,Chandigarh<br/>
              <em>Newly Constructed Property</em></p>
              <a href="#" className="btn btn-primary">Contact</a>&nbsp;
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://5.imimg.com/data5/SX/TR/RO/SELLER-3989464/kanal-kothi-house-for-sale-sector-16-chandigarh-500x500.jpg" height="200px"/>
            <div className="card-body">
              <h5 className="card-title">&#8377; 1.65 Cr</h5>
              <p className="card-text">
                <b>6 BHK Villa</b> for sale in Sector-38</p><br/><br/>
              <a href="#" className="btn btn-primary">Contact</a>&nbsp;
              <a href="#" className="btn btn-primary">More</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </React.Fragment>
};
export default App;