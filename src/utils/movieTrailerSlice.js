import { createSlice } from "@reduxjs/toolkit";

const movieTrailerSlice = createSlice({
  name: "trailer",
  initialState: {
    id: null,
    title: null,
    description: null,
    releaseDate: null,
    rating: null,
    posterPath: null,
  },
  reducers: {
    addMovieTrailerDetails: (state, action) => {
      const { id, title, description, releaseDate, rating, posterPath } =
        action.payload;
      state.id = id;
      state.title = title;
      state.description = description;
      state.releaseDate = releaseDate;
      state.rating = rating;
      state.posterPath = posterPath;
    },
  },
});

export const { addMovieTrailerDetails, addMovieTrailerVideo } =
  movieTrailerSlice.actions;
export default movieTrailerSlice.reducer;
