import { createSlice, createAction } from "@reduxjs/toolkit";

export const reducerPrefix = "posts";

// ACTIONS

export const loadPosts = createAction(`${reducerPrefix}/LOAD_POSTS`);
export const searchPosts = createAction(`${reducerPrefix}/SEARCH_POSTS`);
export const sortPosts = createAction(`${reducerPrefix}/SORT_POSTS`);

// REDUCER

export const loadPostsStatus = {
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const initialState = {
  allPosts: [],
  userPosts: {},
  filteredPosts: [],
  status: "",
  errorMessage: "",
  isSearching: false,
  isSorting: false,
  currentPage: 1,
  objectsPerPage: 10,
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
    FILTER_POSTS: (state, action) => {
      state.isSearching = true;
      const filteredPosts = state.allPosts.filter((post) =>
        post.title.includes(action.payload.toLowerCase().trim()),
      );
      state.filteredPosts = filteredPosts;

      if (state.filteredPosts.length !== 0) {
        state.status = loadPostsStatus.SUCCESS;
      } else {
        state.status = loadPostsStatus.ERROR;
        state.errorMessage = "Не удалось найти посты";
      }
      state.currentPage = 1;
    },
    CLEAR_FILTERED_POSTS: (state) => {
      state.isSearching = false;
      state.filteredPosts = [];
      state.currentPage = 1;
    },
    SORTING_POSTS: (state, action) => {
      state.isSorting = true;
      let posts = state.isSearching ? state.filteredPosts : state.allPosts;
      const sorted = posts.sort((a, b) => a.title.localeCompare(b.title));

      if (posts.length === 0) {
        state.status = loadPostsStatus.ERROR;
        state.errorMessage = "Не удалось найти посты";
        return;
      }

      if (action.payload === "increase") {
        posts = sorted;
      } else if (action.payload === "decrease") {
        posts = sorted.reverse();
      }

      state.status = loadPostsStatus.SUCCESS;
      state.currentPage = 1;
    },
    CLEAR_SORTING_POSTS: (state) => {
      state.isSorting = false;
    },
    SET_PAGE: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const {
  LOAD_POSTS_LOADING,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_ERROR,
  FILTER_POSTS,
  CLEAR_FILTERED_POSTS,
  SORTING_POSTS,
  CLEAR_SORTING_POSTS,
  SET_PAGE,
} = postsSlice.actions;
export default postsSlice.reducer;
