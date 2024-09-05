import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidUserData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG_URL, USER_AVATAR } from "../utils/constants";
const Login = () => {
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

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              // An error occurred
              let errorMessage = error.code;
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          let errorMessage = error.code;
          if (errorMessage === "auth/email-already-in-use") {
            errorMessage = "Email already in use. Please sign in.";
          }
          setErrorMessage(errorMessage);
          // setErrorMessage(errorCode + " : " + errorMessage);
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
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          let errorMessage = error.code;
          if (errorMessage === "auth/invalid-credential") {
            errorMessage = "Invalid email or password.";
          }
          setErrorMessage(errorMessage);
          // setErrorMessage(errorCode + " : " + errorMessage);
        });
    }
  };

  return (
    <div className="">
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover fixed"
          alt="bannerIamge"
          src={BG_IMG_URL}
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="md:h-auto md:w-3/12 absolute rounded-t-3xl bg-black p-12 my-24 mx-auto right-0 left-0 text-white md:rounded-lg bg-opacity-80"
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
