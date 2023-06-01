import { takeEvery, put, select } from "redux-saga/effects";
import { loadComments, selectIsCurrentComments } from "../reducers/comments";
import { selectIsCommentsOpen, showComments } from "../reducers/ui";
import { SET_COMMENTS_CLOSE, SET_COMMENTS_OPEN } from "../reducers/ui";

// WORKERS

function* showCommentsWorker({ payload }) {
  const postId = payload;

  const isCommentsOpen = yield select(selectIsCommentsOpen, postId);
  const isCurrentComments = yield select(selectIsCurrentComments, postId);

  if (isCommentsOpen) {
    yield put(SET_COMMENTS_CLOSE(postId));
  } else {
    yield put(SET_COMMENTS_OPEN(postId));
    if (!isCurrentComments) yield put(loadComments(postId));
  }
}

// WATCHER

export default function* uiWatcher() {
  yield takeEvery(showComments, showCommentsWorker);
}
