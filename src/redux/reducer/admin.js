import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  listMovie: []
}

const admin = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    addMovieActions: (state, action) => {
      state.listMovie.push(action.payload)
    },
    removeMovieActions: (state, action) => {
      state.listMovie = state.listMovie.filter((_, index) => index !== action.payload )
    }
  }
})

export const { addMovieActions, removeMovieActions } = admin.actions
export default admin.reducer