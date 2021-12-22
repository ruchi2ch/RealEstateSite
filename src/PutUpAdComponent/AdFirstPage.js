import React, { Component } from "react";
import "./AdForm.css";
import backvid from "../images/background_video_website.mp4";

export class AdFirstPage extends Component {
  continue = (e) => {
    //takes an event parameter
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props; //ES6 destruction assignment, same as this.props.value   (we can also use this.props.values/handleChange but by doing this e can use values alone)
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
              <center>
                <h1>Property Details</h1>
              </center>

              <div className="form-inputs-ad">
                <label className="form-label-ad">You are the :</label>
                <center>
                  <input
                    type="radio"
                    id="owner"
                    name="property_details_a"
                    value="owner"
                    defaultvalue={values.owner}
                    onChange={handleChange("owner")}
                  />
                  <label for="owner" className="form-radio-ad">
                    Owner
                  </label>
                  <input
                    type="radio"
                    id="agent"
                    name="property_details_a"
                    value="agent"
                    defaultvalue={values.agent}
                    onChange={handleChange("agent")}
                  />
                  <label for="agent" className="form-radio-ad">
                    Agent
                  </label>
                  <input
                    type="radio"
                    id="builder"
                    name="property_details_a"
                    value="builder"
                    defaultvalue={values.builder}
                    onChange={handleChange("builder")}
                  />
                  <label for="builder" className="form-radio-ad">
                    Builder
                  </label>
                </center>
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Property for:</label>
                <center>
                  <input
                    type="radio"
                    id="sale"
                    name="property_details_b"
                    value="sale"
                    defaultvalue={values.sale}
                    onChange={handleChange("sale")}
                  />
                  <label for="sale" className="form-radio-ad">
                    Sale
                  </label>
                  <input
                    type="radio"
                    id="rent"
                    name="property_details_b"
                    value="rent"
                    defaultvalue={values.rent}
                    onChange={handleChange("rent")}
                  />
                  <label for="rent" className="form-radio-ad">
                    Rent
                  </label>
                  <input
                    type="radio"
                    id="hostel"
                    name="property_details_b"
                    value="hostel"
                    defaultvalue={values.hostel}
                    onChange={handleChange("hostel")}
                  />
                  <label for="hostel" className="form-radio-ad">
                    Hostel
                  </label>
                </center>
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Property Location</label>
                <input
                  className="form-input-ad"
                  type="text"
                  name="address"
                  placeholder="Enter address of property"
                  defaultvalue={values.address}
                  onChange={handleChange("address")}
                />
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Choose property type:</label>
                <select
                  id="property"
                  name="property_details_d"
                  className="form-input-ad"
                >
                  <option value="" selected>
                    --choose property type--
                  </option>
                  <option value="Flat/ Apartment" className="form-labels-ad">
                    Flat/ Apartment
                  </option>
                  <option value="Residential House" className="form-labels-ad">
                    Residential House
                  </option>
                  <option value="Villa" className="form-labels-ad">
                    Villa
                  </option>
                  <option
                    value="Builder Floor Apartment"
                    className="form-labels-ad"
                  >
                    Builder Floor Apartment
                  </option>
                  <option
                    value="Residential Land/ Plot"
                    className="form-labels-ad"
                  >
                    Residential Land/ Plot
                  </option>
                  <option value="Penthouse" className="form-labels-ad">
                    Penthouse
                  </option>
                  <option value="Studio Apartment" className="form-labels-ad">
                    Studio Apartment
                  </option>
                </select>
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">
                  Enter area of the property:
                </label>
                <input
                  className="form-input-ad"
                  type="number"
                  name="area"
                  placeholder="area in sq.-ft."
                  defaultvalue={values.area}
                  onChange={handleChange("area")}
                />
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Bedrooms:</label>
                <select
                  id="property"
                  name="property_details_e"
                  className="form-input-ad"
                >
                  <option value="" selected>
                    --no. of bedrooms--
                  </option>
                  <option value="1" className="form-labels-ad">
                    1
                  </option>
                  <option value="2" className="form-labels-ad">
                    2
                  </option>
                  <option value="3" className="form-labels-ad">
                    3
                  </option>
                  <option value="4" className="form-labels-ad">
                    4
                  </option>
                  <option value="4+" className="form-labels-ad">
                    4+
                  </option>
                </select>
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Furnishing:</label>
                <select
                  id="property"
                  name="property_details_e"
                  className="form-input-ad"
                >
                  <option value="" selected>
                    --choose furnished status--
                  </option>
                  <option value="Furnished" className="form-labels-ad">
                    Furnished
                  </option>
                  <option value="Unfurnished" className="form-labels-ad">
                    Unfurnished
                  </option>
                  <option value="Semi-Furnished" className="form-labels-ad">
                    Semi-Furnished
                  </option>
                </select>
              </div>

              <div className="form-inputs-ad">
                <label className="form-label-ad">Price</label>
                <input
                  className="form-input-ad"
                  type="text"
                  name="price"
                  placeholder="in rupees"
                  defaultvalue={values.price}
                  onChange={handleChange("price")}
                />
              </div>

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

export default AdFirstPage;
