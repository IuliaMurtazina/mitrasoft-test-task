import { createSlice, createAction, current } from "@reduxjs/toolkit";

export const reducerPrefix = "comments";

// ACTIONS

export const loadComments = createAction(`${reducerPrefix}/LOAD_COMMENTS`);

// REDUCER

export const loadCommentsStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  comments: {},
  status: "",
  errorMessage: "",
};

const commentsSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    LOAD_COMMENTS_LOADING: (state) => {
      state.status = loadCommentsStatus.LOADING;
    },
    LOAD_COMMENTS_SUCCESS: (state, { payload }) => {
      state.comments = {
        ...state.comments,
        [payload.postId]: payload.data,
      };
      state.status = loadCommentsStatus.SUCCESS;
    },
    LOAD_COMMENTS_ERROR: (state, action) => {
      state.status = loadCommentsStatus.ERROR;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  LOAD_COMMENTS_LOADING,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_ERROR,
} = commentsSlice.actions;
export default commentsSlice.reducer;

// SELECTORS

export const selectIsCurrentComments = (state, postId) =>
  !!state.comments.comments[postId];
