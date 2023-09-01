// import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "./reducers/productSaga";

// const store = createStore(rootReducer)
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(productSaga)
export default store;
