import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidUserData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isShowSignInForm, setIsShowSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setIsShowSignInForm(!isShowSignInForm);
    setErrorMessage(null);
  };

  const handleOnClickSubmit = () => {
    console.log("Submit");

    const message = checkValidUserData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isShowSignInForm) {
      // handle sign up logic here
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up

          const user = userCredential.user;
          // console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/128251589?v=4",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
          // ..
        });
    } else {
      // handle sign in logic here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          navigate("/browse");
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " : " + errorMessage);
        });
    }

    // console.log(email.current.value);
    // console.log(password.current.value);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-3/12 absolute bg-black p-12 my-24 mx-auto right-0 left-0 text-white rounded-l bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isShowSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isShowSignInForm && (
          <input
            ref={name}
            className="p-4 my-3 w-full bg-gray-700  rounded-lg text-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-3 w-full bg-gray-700  rounded-lg text-white"
          type="text"
          placeholder="Email Address"
        />
        <input
          ref={password}
          className="p-4 my-3 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="errorMessage text-red-500">{errorMessage}</p>
        <button
          onClick={handleOnClickSubmit}
          className="p-4 my-6 w-full bg-red-700 rounded-lg"
        >
          {isShowSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-3 pl-2">
          👉
          {isShowSignInForm ? (
            <span className="font-thin text-slate-400">
              New to Netflix?
              <span
                onClick={toggleSignInForm}
                className="ml-1 cursor-pointer font-medium text-white hover:underline"
              >
                Sign up now.
              </span>
            </span>
          ) : (
            <span className="font-thin text-slate-400">
              Already a Member?
              <span
                onClick={toggleSignInForm}
                className="ml-1 cursor-pointer font-medium text-white hover:underline"
              >
                Sign in
              </span>
            </span>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
