import axiosInstance from "../../axiosInstance";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import { LOAD_POSTS, loadPosts } from "../reducers/posts";

// WORKERS

function* loadPostsWorker() {
  try {
    const { data } = yield call(() => axiosInstance.get("posts"));
    yield delay(500);
    yield put(LOAD_POSTS(data));
  } catch (err) {
    throw new Error();
  }
}

// WATCHER

export default function* postsWatcher() {
  yield takeEvery(loadPosts, loadPostsWorker);
}
