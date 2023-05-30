import { createSlice, createAction, current } from "@reduxjs/toolkit";

export const reducerPrefix = "posts";

// ACTIONS

export const loadPosts = createAction(`${reducerPrefix}/LOAD_POSTS`);

// REDUCER

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: reducerPrefix,
  initialState,
  reducers: {
    LOAD_POSTS: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const { LOAD_POSTS } = postsSlice.actions;
export default postsSlice.reducer;
