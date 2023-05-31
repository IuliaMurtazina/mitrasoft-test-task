import { createSlice, current, createAction } from "@reduxjs/toolkit";

export const reducerPrefix = "ui";

// ACTIONS

export const showComments = createAction(`${reducerPrefix}/SHOW_COMMENTS`);

// REDUCER

const initialState = {
  isMenuOpen: false,
  isCommentsOpen: {},
};

const uiSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    SET_MENU_OPEN: (state) => {
      state.isMenuOpen = true;
    },
    SET_MENU_CLOSE: (state) => {
      state.isMenuOpen = false;
    },
    SET_COMMENTS_OPEN: (state, action) => {
      state.isCommentsOpen = {
        ...state.isCommentsOpen,
        [action.payload]: true,
      };
      console.log(current(state));
    },
    SET_COMMENTS_CLOSE: (state, action) => {
      state.isCommentsOpen = {
        ...state.isCommentsOpen,
        [action.payload]: false,
      };
      console.log(current(state));
    },
  },
});

export const {
  SET_MENU_CLOSE,
  SET_MENU_OPEN,
  SET_COMMENTS_OPEN,
  SET_COMMENTS_CLOSE,
} = uiSlice.actions;
export default uiSlice.reducer;
