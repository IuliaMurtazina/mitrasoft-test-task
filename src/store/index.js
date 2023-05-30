import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";
import uiReducer, { reducerPrefix as UI_REDUCER_PREFIX } from "./reducers/ui";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { [UI_REDUCER_PREFIX]: uiReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
