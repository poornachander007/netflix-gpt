import { signOut } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user, "from header");
  return (
    <div className="Header w-screen z-10 absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <div>
        <img
          className="w-44"
          alt="logo"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      {user && (
        <div className="flex items-center">
          {/* <p className="m-2 px-2 text-white rounded-lg self-stretch font-medium text-lg bg-gradient-to-t from-black">
            {user?.displayName}
          </p> */}
          <img
            className="w-8 m-2 border border-yellow-900 rounded-3xl"
            alt="userlogo"
            src={user?.photoURL}
          />
          <button
            className="m-2 border border-red-700 px-3 py-1 rounded-lg bg-emerald-200 text-red-800 font-medium"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  navigate("/");
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                });
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
