import { createSlice, createAction, current } from "@reduxjs/toolkit";

export const reducerPrefix = "users";

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
  reducers: {
    LOAD_USER_LOADING: (state) => {
      state.status = loadUsersStatus.LOADING;
    },
    LOAD_USER_SUCCESS: (state, { payload }) => {
      state.users = {
        ...state.users,
        [`user-${payload.id}`]: payload,
      };
      state.status = loadUsersStatus.SUCCESS;
    },
    LOAD_USER_ERROR: (state, action) => {
      state.status = loadUsersStatus.ERROR;
      state.errorMessage = action.payload;
    },
  },
});

export const { LOAD_USER_LOADING, LOAD_USER_SUCCESS, LOAD_USER_ERROR } =
  usersSlice.actions;
export default usersSlice.reducer;
