import axiosInstance from "../../axiosInstance";
import { call, takeEvery, put, delay } from "redux-saga/effects";
import {
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_LOADING,
  LOAD_COMMENTS_ERROR,
  loadComments,
} from "../reducers/comments";

// WORKERS

function* loadCommentsWorker({ payload }) {
  const postId = payload;
  try {
    yield put(LOAD_COMMENTS_LOADING());
    const { data } = yield call(() => axiosInstance.get(`comments?${postId}`));
    yield delay(500);
    yield put(LOAD_COMMENTS_SUCCESS({ postId, data }));
  } catch (err) {
    yield delay(500);
    yield put(LOAD_COMMENTS_ERROR("Комментарии не найдены"));
  }
}

// WATCHER

export default function* commentsWatcher() {
  yield takeEvery(loadComments, loadCommentsWorker);
}
