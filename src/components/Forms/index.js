import React from "react";

export const SignUpForm = ({ errors, handleErrors, handleSubmit }) => (
  <div className="form-container sign-up-container">
    <form id={"sign-up__form"}>
      <h1>Create Account</h1>
      <input
        className="input"
        data-colname={"username"}
        type="text"
        placeholder="Name"
      />
      <span className={"error__container"}>
        {/* {errors + " message goes here"} */}
      </span>
      <input
        className="input"
        data-colname={"password"}
        type="password"
        placeholder="Password"
      />
      <span className={"error__container"}>
        {/* {errors + " message goes here"} */}
      </span>
      <button
        onClick={e => {
          e.preventDefault();
          handleSubmit("sign-up__form");
        }}
      >
        Sign Up
      </button>
    </form>
  </div>
);

export const SignInForm = ({ errors, handleErrors, handleSubmit }) => (
  <div className="form-container sign-in-container">
    <form id={"sign-in__form"}>
      <h1>Sign in</h1>
      <input
        className="input"
        data-colname={"username"}
        type="name"
        placeholder="Name"
      />
      <input
        className="input"
        data-colname={"password"}
        type="password"
        placeholder="Password"
      />
      <button
        onClick={e => {
          e.preventDefault();
          handleSubmit("sign-in__form");
        }}
      >
        Sign In
      </button>
    </form>
  </div>
);
