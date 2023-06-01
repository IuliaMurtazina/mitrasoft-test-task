import { createSlice, createAction, current } from "@reduxjs/toolkit";

export const reducerPrefix = "posts";

// ACTIONS

export const loadPosts = createAction(`${reducerPrefix}/LOAD_POSTS`);

// REDUCER

export const loadPostsStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  allPosts: [],
  userPosts: {},
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
    LOAD_POSTS_SUCCESS: (state, { payload }) => {
      if (payload.userId) {
        state.userPosts = {
          ...state.userPosts,
          [`userId=${payload.userId}`]: payload.posts,
        };
      } else {
        state.allPosts = payload.posts;
      }
      state.status = loadPostsStatus.SUCCESS;
    },
    LOAD_POSTS_ERROR: (state, action) => {
      state.status = loadPostsStatus.ERROR;
      state.errorMessage = action.payload;
    },
  },
});

export const { LOAD_POSTS_LOADING, LOAD_POSTS_SUCCESS, LOAD_POSTS_ERROR } =
  postsSlice.actions;
export default postsSlice.reducer;
