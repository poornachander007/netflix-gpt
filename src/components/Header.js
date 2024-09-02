import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  // console.log(user, "from header");
  return (
    <div className="Header w-screen z-10 absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <div>
        <img className="w-44" alt="logo" src={LOGO_URL} />
      </div>
      {user && (
        <div className="flex items-center">
          {/* <p className="m-2 px-2 text-white rounded-lg self-stretch font-medium text-lg bg-gradient-to-t from-black">
            {user?.displayName}
          </p> */}
          <img
            className="w-8 m-2  rounded-md"
            alt="userlogo"
            src={user?.photoURL}
          />
          <button
            className="m-2 border border-red-700 px-3 py-1 rounded-lg bg-emerald-200 text-red-800 font-medium"
            onClick={() => {
              signOut(auth)
                .then(() => {
                  // Sign-out successful.
                })
                .catch((error) => {
                  // An error happened.
                  navigate("/error");
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
