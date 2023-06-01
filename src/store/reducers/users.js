import { createSlice, createAction } from "@reduxjs/toolkit";

export const reducerPrefix = "posts";

// ACTIONS

export const loadUser = createAction(`${reducerPrefix}/LOAD_USER`);

// REDUCER

export const loadUsersStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  users: {},
};

const usersSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {},
});

export const { LOAD_POSTS_LOADING, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } =
  usersSlice.actions;
export default usersSlice.reducer;
