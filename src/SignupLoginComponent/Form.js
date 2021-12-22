import React, { useState } from "react";
import "./Form.css";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import FormLogin from "./FormLogin";
import backvid from "../images/background_video_website.mp4";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    //function that is going to make setIsSubmitted to true
    setIsSubmitted(true);
  }
  return (
    <>
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

        <div className="form-container">
          {!isSubmitted ? (
            <FormSignup submitForm={submitForm} />
          ) : (
            <FormSuccess /> //if else
          )}
          {/* <FormLogin /> */}
        </div>
      </div>
    </>
  );
};

export default Form;
