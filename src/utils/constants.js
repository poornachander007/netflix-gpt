export const LOGO_URL =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const POORNA_AVATAR =
  "https://avatars.githubusercontent.com/u/128251589?v=4";

export const USER_AVATAR =
  "https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const MOVIES_URL =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780/";

export const SUPPORTED_LANGUAGES = [
  { id: "en", name: "English" },
  { id: "hi", name: "हिंदी" },
  { id: "te", name: "తెలుగు" },
  // { id: "es", name: "Español" },
  // { id: "fr", name: "Français" },
  // { id: "de", name: "Deutsch" },
  // { id: "it", name: "Italiano" },
  // { id: "ja", name: "日本語" },
  // { id: "ko", name: "한국인" },
  // { id: "pt", name: "Português" },
  // { id: "ru", name: "Русский" },
  // { id: "zh", name: "中国人" },
];

export const BG_IMG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/1d29f9a4-1900-43dc-a420-99044f734ee2/cc3b7bcb-3f79-449e-a37c-26ffb20fce3c/IN-en-20240826-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7a193436-88c7-4f66-a8f0-e191d3b26d13_large.jpg";

// export const OPENAI_KEY =
//   "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";

export const OPENAI_KEY = "REACT_APP_OPENAI_KEY";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + "REACT_APP_TMDB_KEY",
  },
};
