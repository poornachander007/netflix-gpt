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
    <div className="Header w-screen z-10 absolute px-8 py-2 bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between items-center">
      <div>
        <img className="w-36 md:w-44" alt="logo" src={LOGO_URL} />
      </div>
      {user && (
        <div className="flex w-full md:w-auto items-center justify-between md:justify-normal">
          {showGPTPage && (
            <select
              onChange={handleOnChangeLanguage}
              className="bg-gray-800 text-white px-3 py-1 rounded-sm mr-2"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  className="text-xs md:text-xl"
                  key={lang.id}
                  value={lang.id}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGPTSearchToggle}
            className=" flex justify-center items-center  bg-opacity-50 px-2 py-1 rounded-md md:rounded-lg mr-2 text-white bg-blue-500 hover:bg-blue-600"
          >
            {/* {showGPTPage ? "HomePage" : "SearchByMovie/GPT"} */}
            {showGPTPage ? (
              "HomePage"
            ) : (
              <span className="flex items-center py-1 text-[7px] md:text-[12px] text-gray-300 font-medium font-serif">
                Search By:
                <span className="px-2">
                  <span className="border-b-2 border-dotted  pb-0 mb-0">
                    Movie Name
                  </span>
                  <br />
                  <span className="text-[#B3E5FC] opacity-90 pt-0 mt-0">
                    GPT Ai
                  </span>
                </span>
              </span>
            )}
          </button>
          <img
            className="hidden md:inline-block w-8 m-2 rounded-md"
            alt="userlogo"
            src={user?.photoURL}
          />
          <button
            className="m-2 border border-red-700 px-3 py-1 rounded-md md:rounded-lg bg-emerald-200 font-medium text-black bg-yellow-400 hover:bg-yellow-500"
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
