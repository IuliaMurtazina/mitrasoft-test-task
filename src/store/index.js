import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { reducerPrefix as UI_REDUCER_PREFIX } from "./reducers/ui";
import commentsReducer, {
  reducerPrefix as COMMENTS_REDUCER_PREFIX,
} from "./reducers/comments";
import postsReducer, {
  reducerPrefix as POSTS_REDUCER_PREFIX,
} from "./reducers/posts";
import usersReducer, {
  reducerPrefix as USERS_REDUCER_PREFIX,
} from "./reducers/users";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    [UI_REDUCER_PREFIX]: uiReducer,
    [POSTS_REDUCER_PREFIX]: postsReducer,
    [COMMENTS_REDUCER_PREFIX]: commentsReducer,
    [USERS_REDUCER_PREFIX]: usersReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export default store;
