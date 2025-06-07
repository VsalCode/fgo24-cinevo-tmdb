import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listMovie: []
}

const admin = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addMovieActions: (state, action) => {
      state.listMovie.push(action.payload);
    },
    editMovieActions: (state, action) => {
      const { id, movie } = action.payload;
      const index = state.listMovie.findIndex((m) => m.id === id);
      if (index !== -1) {
        state.listMovie[index] = { ...movie, id };
      }
    },
    removeMovieActions: (state, action) => {
      state.listMovie = state.listMovie.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addMovieActions, removeMovieActions, editMovieActions } = admin.actions
export default admin.reducer