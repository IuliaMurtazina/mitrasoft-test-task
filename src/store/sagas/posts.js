import axiosInstance from "../../axiosInstance";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import {
  LOAD_POSTS_ERROR,
  LOAD_POSTS_LOADING,
  LOAD_POSTS_SUCCESS,
  loadPosts,
} from "../reducers/posts";

// WORKERS

function* loadPostsWorker() {
  try {
    yield put(LOAD_POSTS_LOADING());
    const { data } = yield call(() => axiosInstance.get("posts"));
    yield delay(500);
    yield put(LOAD_POSTS_SUCCESS(data));
  } catch (error) {
    yield delay(500);
    yield put(LOAD_POSTS_ERROR("Не удалось загрузить список постов"));
  }
}

// WATCHER

export default function* postsWatcher() {
  yield takeEvery(loadPosts, loadPostsWorker);
}
