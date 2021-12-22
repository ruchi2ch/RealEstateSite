import React, { Component } from "react";
import "./AdForm.css";
import backvid from "../images/background_video_website.mp4";

export class SuccessAd extends Component {
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
        <div className="form-container-ad-success">
          <div className="form-content-ad-success">
            <h1 className="form-success-ad">We have received your request!</h1>
            <img
              className="form-img-2-ad"
              src="https://ak.picdn.net/shutterstock/videos/1031952227/thumb/3.jpg?ip=x480"
              alt="success-image"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SuccessAd;
