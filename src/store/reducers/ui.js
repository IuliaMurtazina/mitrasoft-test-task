import { createSlice} from "@reduxjs/toolkit";

export const reducerPrefix = "ui";

// REDUCER

const initialState = {
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    SET_MENU_OPEN: (state, action) => {
      console.log(456);
      state.isMenuOpen = true;
    },
    SET_MENU_CLOSE: (state, action) => {
      console.log(123);
      state.isMenuOpen = false;
    },
  },
});

export const { SET_MENU_CLOSE, SET_MENU_OPEN } = uiSlice.actions;
export default uiSlice.reducer;
