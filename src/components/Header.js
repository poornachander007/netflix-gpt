import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTPage } from "../utils/gptSlice";
import { updateLanguage } from "../utils/configSlice";

const Header = () => {
  const showGPTPage = useSelector((store) => store.gpt.showGPTPage);
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

  const handleGPTSearchToggle = () => {
    dispatch(toggleGPTPage());
    dispatch(updateLanguage("en"));
  };
  const handleOnChangeLanguage = (e) => {
    dispatch(updateLanguage(e.target.value));
  };
  return (
    <div className="Header w-screen z-10 absolute px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center">
      <div>
        <img className="w-44" alt="logo" src={LOGO_URL} />
      </div>
      {user && (
        <div className="flex items-center">
          {showGPTPage && (
            <select
              onChange={handleOnChangeLanguage}
              className="bg-gray-800 text-white px-3 py-1 rounded-sm mr-2"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGPTSearchToggle}
            className="bg-violet-700 text-white px-2 py-1 rounded-lg mr-2"
          >
            {showGPTPage ? "HomePage" : "GPTSearch"}
          </button>
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
