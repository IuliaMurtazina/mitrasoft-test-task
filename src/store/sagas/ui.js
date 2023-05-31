import { takeEvery, put, select } from "redux-saga/effects";
import { loadComments } from "../reducers/comments";
import { showComments } from "../reducers/ui";
import { SET_COMMENTS_CLOSE, SET_COMMENTS_OPEN } from "../reducers/ui";

// WORKERS

function* showCommentsWorker({ payload }) {
  const postId = payload;

  const isCommentsOpen = yield select(
    (state) => state.ui.isCommentsOpen[postId],
  );
  const currentComments = yield select(
    (state) => state.comments.comments[postId],
  );

  if (isCommentsOpen) yield put(SET_COMMENTS_CLOSE(postId));
  else {
    yield put(SET_COMMENTS_OPEN(postId));
    if (!currentComments) yield put(loadComments(postId));
  }
}

// WATCHER

export default function* uiWatcher() {
  yield takeEvery(showComments, showCommentsWorker);
}
