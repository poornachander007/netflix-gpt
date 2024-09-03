import { useSelector } from "react-redux";
import { lang } from "../utils/languageConstants";

const GPTSearchBar = () => {
  const langID = useSelector((store) => store.config?.lang);
  return (
    <div className="flex m-auto  ">
      <div className="absolute -z-20">
        <img
          alt="bannerIamge"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg"
        />
      </div>
      <form className="w-1/2 bg-gray-300 m-auto my-[10%] p-6 grid grid-cols-12 rounded-md ">
        <input
          className="col-span-9 p-4 rounded-md outline-none"
          type="text"
          placeholder={
            lang[langID]
              ? lang[langID]?.gptSearchPlaceholder
              : lang["en"].gptSearchPlaceholder
          }
        />
        <button className="col-span-3 bg-violet-600 ml-4">
          {lang[langID] ? lang[langID]?.search : lang["en"].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
