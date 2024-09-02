import { configureStore } from "@reduxjs/toolkit";
import userResucer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userResucer,
  }, // Define your reducers here
});

export default appStore;
