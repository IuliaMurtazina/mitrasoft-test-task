import { createSlice, createAction } from "@reduxjs/toolkit";

export const reducerPrefix = "posts";

// ACTIONS

export const loadPosts = createAction(`${reducerPrefix}/LOAD_POSTS`);
export const loadPostComments = createAction(
  `${reducerPrefix}/LOAD_POST_COMMENTS`,
);

// REDUCER

export const loadPostsStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  posts: [],
  status: "",
  errorMessage: "",
};

const postsSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    LOAD_POSTS_LOADING: (state) => {
      state.status = loadPostsStatus.LOADING;
    },
    LOAD_POSTS_SUCCESS: (state, action) => {
      state.posts = action.payload;
      state.status = loadPostsStatus.SUCCESS;
    },
    LOAD_POSTS_ERROR: (state, action) => {
      state.status = loadPostsStatus.ERROR;
      state.errorMessage = action.payload;
    },
  },
});

export const {
  LOAD_POSTS_LOADING,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  LOAD_POST_COMMENTS_LOADING,
  LOAD_POST_COMMENTS_SUCCESS,
  LOAD_POST_COMMENTS_ERROR,
} = postsSlice.actions;
export default postsSlice.reducer;
