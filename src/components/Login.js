import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isShowSignInForm, setIsShowSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsShowSignInForm(!isShowSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          alt="bannerIamge"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg"
        />
      </div>
      <form className="w-3/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white rounded-l bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isShowSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isShowSignInForm && (
          <input
            className="p-4 my-3 w-full bg-gray-700  rounded-lg text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-3 w-full bg-gray-700  rounded-lg text-white"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-3 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-lg">
          {isShowSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-3 cursor-pointer" onClick={toggleSignInForm}>
          {isShowSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a Member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
