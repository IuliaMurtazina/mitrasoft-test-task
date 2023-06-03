import { takeEvery, put, call, delay } from "redux-saga/effects";
import {
  LOAD_USER_ERROR,
  LOAD_USER_LOADING,
  LOAD_USER_SUCCESS,
  loadUser,
} from "../reducers/users";
import axiosInstance from "../../axiosInstance";
import { SET_PAGE } from "../reducers/posts";

// WORKERS

function* loadUserWorker({ payload }) {
  try {
    yield put(SET_PAGE(1));
    yield put(LOAD_USER_LOADING());
    const { data } = yield call(() => axiosInstance.get(`users/${payload}`));
    yield delay(500);
    yield put(LOAD_USER_SUCCESS(data));
  } catch (error) {
    yield delay(500);
    yield put(LOAD_USER_ERROR("Не удалось загрузить данные пользователя"));
  }
}

// WATCHER

export default function* usersWatcher() {
  yield takeEvery(loadUser, loadUserWorker);
}
