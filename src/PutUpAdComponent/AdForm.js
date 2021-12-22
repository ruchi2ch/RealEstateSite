import React, { Component } from "react";
import AdFirstPage from "./AdFirstPage";
import AdSecondPage from "./AdSecondPage";
import ConfirmAd from "./ConfirmAd";
import SuccessAd from "./SuccessAd";

export class AdForm extends Component {
  state = {
    step: 1,
    Address: "",
    owner: false,
    agent: false,
    builder: false,
    sale: false,
    rent: false,
    hostel: false,
    price: "",
    area: "",
    name: "",
    number: "",
    email: "",
    caddress: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state; //taking the step out of the state (destructuring)
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    //e event parameter
    //each input will have its own state and everytime we edit in the input this will make it change
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state; //pulling the step out of the state by destructing  and determining which step we are on
    const {
      address,
      owner,
      agent,
      builder,
      sale,
      rent,
      hostel,
      price,
      area,
      name,
      number,
      email,
      caddress,
    } = this.state; //pulling out the fields as well
    const values = {
      address,
      owner,
      agent,
      builder,
      sale,
      rent,
      hostel,
      price,
      area,
      name,
      number,
      email,
      caddress,
    }; //this way we can p[ass the values in each components.

    switch (step) {
      case 1:
        return (
          <AdFirstPage
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <AdSecondPage
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <ConfirmAd
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <SuccessAd />;
      default:
        console.log("the form is unavailable :( ");
    }
  }
}

export default AdForm;
