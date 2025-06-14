import { createSlice } from "@reduxjs/toolkit";

const confiSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {changeLanguage} = confiSlice.actions
export default confiSlice.reducer;
