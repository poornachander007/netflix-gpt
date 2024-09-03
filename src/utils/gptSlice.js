import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTPage: false,
  },
  reducers: {
    toggleGPTPage: (state, action) => {
      state.showGPTPage = !state.showGPTPage;
    },
  },
});

export const { toggleGPTPage } = gptSlice.actions;

export default gptSlice.reducer;
