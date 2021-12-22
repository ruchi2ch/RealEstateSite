import React from "react";
import ValidateLogin from "./ValidateLogin";
import useForm from "./UseForm";
import "./Form.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    ValidateLogin
  );
  return (
    <div className="form-content">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Log in</h1>
        <div className="form-inputs">
          <div className="form-inputs">
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button className="form-input-btn" type="submit">
            Log in
          </button>
          <span className="form-input-login">
            To create new account signup <a href="#">here</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
