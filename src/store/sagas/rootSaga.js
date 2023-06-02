import { all, fork, spawn, call } from "redux-saga/effects";
import postsWatcher from "./posts";
import commentsWatcher from "./comments";
import uiWatcher from "./ui";
import usersWatcher from "./users";

export default function* rootSaga() {
  const sagas = [postsWatcher, commentsWatcher, uiWatcher, usersWatcher];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
