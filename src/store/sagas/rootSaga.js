import { all, fork } from "redux-saga/effects";
import postsWatcher from "./posts";

export default function* rootSaga() {
  yield all([fork(postsWatcher)]);
}
