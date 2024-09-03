import { configureStore } from "@reduxjs/toolkit";
import userResucer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userResucer,
    movies: moviesReducer,
    gpt: gptReducer, // Add the GPT reducer here.
    config: configReducer,
  }, // Define your reducers here
});

export default appStore;
