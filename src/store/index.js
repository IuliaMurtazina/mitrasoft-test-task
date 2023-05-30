import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { reducerPrefix as UI_REDUCER_PREFIX } from "./reducers/ui";
import postsReducer, {
  reducerPrefix as POSTS_REDUCER_PREFIX,
} from "./reducers/posts";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [UI_REDUCER_PREFIX]: uiReducer,
    [POSTS_REDUCER_PREFIX]: postsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;
