import axiosInstance from "../../axiosInstance";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import {
  FILTER_POSTS,
  LOAD_POSTS_ERROR,
  LOAD_POSTS_LOADING,
  LOAD_POSTS_SUCCESS,
  SORTING_POSTS,
  loadPosts,
  searchPosts,
  sortPosts,
} from "../reducers/posts";

// WORKERS

function* loadPostsWorker({ payload }) {
  try {
    yield put(LOAD_POSTS_LOADING());
    const { data } = yield call(() =>
      axiosInstance.get("posts", {
        params: {
          ...payload,
        },
      }),
    );
    yield delay(500);
    yield put(LOAD_POSTS_SUCCESS({ posts: data, userId: payload?.userId }));
  } catch (error) {
    yield delay(500);
    yield put(LOAD_POSTS_ERROR("Не удалось загрузить список постов"));
  }
}

function* searchPostsWorker({ payload }) {
  yield put(LOAD_POSTS_LOADING());
  yield delay(500);
  yield put(FILTER_POSTS(payload));
}

function* sortPostsWorker({ payload }) {
  yield put(LOAD_POSTS_LOADING());
  yield delay(500);
  yield put(SORTING_POSTS(payload));
}

// WATCHER

export default function* postsWatcher() {
  yield takeEvery(loadPosts, loadPostsWorker);
  yield takeEvery(searchPosts, searchPostsWorker);
  yield takeEvery(sortPosts, sortPostsWorker);
}
