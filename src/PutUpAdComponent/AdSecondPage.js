import React, { Component } from "react";
import "./AdForm.css";
import backvid from "../images/background_video_website.mp4";

export class AdSecondPage extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
              <h1>Contact Details</h1>
              <div className="form-inputs-ad">
                <label className="form-label-ad">Name</label>
                <input
                  className="form-input-ad"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  defaultvalue={values.name}
                  onChange={handleChange("name")}
                />
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Number</label>
                <input
                  className="form-input-ad"
                  type="text"
                  name="number"
                  placeholder="Enter your number"
                  defaultvalue={values.number}
                  onChange={handleChange("number")}
                />
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Email</label>
                <input
                  className="form-input-ad"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  defaultvalue={values.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Email</label>
                <input
                  className="form-input-ad"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  defaultvalue={values.email}
                  onChange={handleChange("email")}
                />
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Contact address</label>
                <input
                  className="form-input-ad"
                  type="text"
                  name="caddress"
                  placeholder="Enter your address"
                  defaultvalue={values.caddress}
                  onChange={handleChange("caddress")}
                />
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

export default AdSecondPage;
