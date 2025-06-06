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
    removeMovieActions: (state, action) => {
      state.listMovie.splice(action.payload, 1);
    },
    editMovieActions: (state, action) => {
      const { index, movie } = action.payload;
      state.listMovie[index] = { ...movie, id: state.listMovie[index].id };
    },
  },
});

export const { addMovieActions, removeMovieActions, editMovieActions } = admin.actions
export default admin.reducer