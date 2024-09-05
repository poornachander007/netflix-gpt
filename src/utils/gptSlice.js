import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTPage: false,
    gptMovies: { movieNames: null, movieResults: null },
    isSearchModeGPT: false,
  },
  reducers: {
    toggleGPTPage: (state, action) => {
      state.showGPTPage = !state.showGPTPage;
    },
    addGPTMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovies = { movieNames, movieResults };
    },
    toggleIsSearchModeGPT: (state, action) => {
      state.isSearchModeGPT = !state.isSearchModeGPT;
    },
  },
});

export const { toggleGPTPage, addGPTMovies, toggleIsSearchModeGPT } =
  gptSlice.actions;

export default gptSlice.reducer;
