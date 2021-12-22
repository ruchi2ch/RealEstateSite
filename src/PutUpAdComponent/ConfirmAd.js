import React, { Component } from "react";
import "./AdForm.css";
import backvid from "../images/background_video_website.mp4";

export class ConfirmAd extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { address, price, area, name, number, email, caddress },
    } = this.props; //this.props.address
    return (
      <div className="video">
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "220%",
            objectFit: "cover",
            transform: "translate(-50%,-50%)",
            zIndex: "-1",
          }}
        >
          <source src={backvid} type="video/mp4" />
        </video>
        <div className="form-container-ad">
          <div className="form-content-ad">
            <form className="form-ad">
              <h1>Review your inputs</h1>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Name:</label>
                <p>{name}</p>
              </div>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Number:</label>
                <p>{number}</p>
              </div>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Email:</label>
                <p>{email}</p>
              </div>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Seller's address:</label>
                <p>{caddress}</p>
              </div>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Property Address:</label>
                <p>{address}</p>
              </div>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Property Area:</label>
                <p>{area}</p>
              </div>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Property Price:</label>
                <p>{price}</p>
              </div>
              <button className="form-input-btn-prev" onClick={this.back}>
                Back
              </button>

              <button className="form-input-btn-nxt" onClick={this.continue}>
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ConfirmAd;
