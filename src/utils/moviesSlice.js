import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addPopularMovies: null,
    trailerVideo: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovie: (state, action) => {
      
      state.addPopularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
    }
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
